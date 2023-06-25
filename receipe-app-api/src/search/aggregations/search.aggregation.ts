import { PipelineStage } from 'mongoose';

import { RecipeSchema } from '../../recipe/schemas';
import { RecipeListItemDto, SearchDto } from '../dto';
import { Calories, Difficulty, Facet, TotalTime } from '../models';

import { CategoriesAggregation } from './categories.aggregation';
import { DifficultyAggregation } from './difficulty.aggregation';
import { TotalTimeAggregation } from './total-time.aggregation';
import { CaloriesAggregation } from './calories.aggregation';
import { SortAggregation } from './sort.aggregation';

interface SearchAggregationParams {
    inputFilters: SearchDto;
}

const recipeListItemDto = new RecipeListItemDto({
    image: '',
    time: 0,
    title: '',
    kCal: 0,
    id: '',
});

const unsetList = Object.keys(RecipeSchema.obj).filter((key) => {
    return !recipeListItemDto.hasOwnProperty(key);
});

export interface SearchAggregationResult {
    recipes: Array<RecipeListItemDto>;
    totals: [{ total: number }];
    difficulty: Facet<Difficulty>;
    totalTime: Facet<TotalTime>;
    calories: Facet<Calories>;
    mealType: Facet<string>;
    dietType: Facet<string>;
}

export class SearchAggregation extends Array<PipelineStage> {
    constructor({ inputFilters }: SearchAggregationParams) {
        super();

        const caloriesAggregation = new CaloriesAggregation({
            appliedFilter: inputFilters.calories,
        });

        const totalTimeAggregation = new TotalTimeAggregation({
            appliedFilter: inputFilters.totalTime,
        });

        const difficultyAggregation = new DifficultyAggregation({
            appliedFilter: inputFilters.difficulty,
        });

        const mealTypeAggregation = new CategoriesAggregation({
            appliedFilter: inputFilters.mealType,
            facetName: 'mealType'
        });

        const dietTypeAggregation = new CategoriesAggregation({
            appliedFilter: inputFilters.mealType,
            facetName: 'dietType'
        });

        const sortAggregation = new SortAggregation({
            appliedSort: inputFilters.sort
        });

        const data: Array<PipelineStage> = [
            {
                $match: {
                    $or: [
                        { $text: { $search: inputFilters.search } },
                        // If no matches found, proceed partial match for the beginning of the title
                        { title: new RegExp(`^${inputFilters.search}`, 'ig') },
                    ],
                    $and: [
                        difficultyAggregation.filter,
                        totalTimeAggregation.filter,
                        caloriesAggregation.filter,
                        mealTypeAggregation.filter,
                        dietTypeAggregation.filter,
                    ]
                },
            },
            sortAggregation.pipelineStage,
            {
                $facet: {
                    ...caloriesAggregation.facet,
                    ...totalTimeAggregation.facet,
                    ...difficultyAggregation.facet,
                    ...mealTypeAggregation.facet,
                    ...dietTypeAggregation.facet,
                    recipes: [
                        { $addFields: { id: '$_id' } },
                        { $unset: ['_id', '__v', ...unsetList] },
                        { $skip: inputFilters.offset },
                        { $limit: inputFilters.pageSize }
                    ],
                    totals: [
                        { $count: 'total' }
                    ],
                }
            }
        ];

        data.forEach((item, index) => this[index] = item);
    }
}
