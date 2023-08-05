import { PipelineStage } from 'mongoose';

import { CategoryType } from '../../categories/models';
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

export interface SearchAggregationResult {
    recipes: Array<RecipeListItemDto>;
    pageData: [{ total: number }];
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
            type: CategoryType.MEAL,
        });

        const dietTypeAggregation = new CategoriesAggregation({
            appliedFilter: inputFilters.dietType,
            type: CategoryType.DIET,
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
            {
                $facet: {
                    ...caloriesAggregation.facet,
                    ...totalTimeAggregation.facet,
                    ...difficultyAggregation.facet,
                    ...mealTypeAggregation.facet,
                    ...dietTypeAggregation.facet,
                    recipes: [
                        sortAggregation.pipelineStage,
                        ...RecipeListItemDto.mongoAggregationConstructor(),
                        { $skip: inputFilters.offset },
                        { $limit: inputFilters.pageSize },
                    ],
                    pageData: [
                        { $count: 'total' },
                    ],
                }
            },
        ];

        data.forEach((item, index) => this[index] = item);
    }
}
