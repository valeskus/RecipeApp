import { Injectable } from '@nestjs/common';
import { Model, PipelineStage } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Recipe, RecipeSchema } from '../recipe/schemas';

import { SearchDto, RecipeListItemDto, SearchResultsDto } from './dto';
import { SortOptions } from './models';

const recipeListItemDto = new RecipeListItemDto({
    image: '',
    time: 0,
    title: '',
    kCal: 0
});

const unsetList = Object.keys(RecipeSchema.obj).filter((key) => {
    return !recipeListItemDto.hasOwnProperty(key);
});

@Injectable()
export class SearchService {
    @InjectModel(Recipe.name) private recipeModel: Model<Recipe>;

    private getSortPipelineBySortOption(sortOption: SortOptions): PipelineStage.Sort['$sort'] {
        switch (sortOption) {
            case SortOptions.RELEVANCE: {
                return {
                    score: { $meta: 'textScore' }
                };
            }

            case SortOptions.ALPHABETICALLY_ASC: {
                return {
                    title: 1
                };
            }

            case SortOptions.ALPHABETICALLY_DESC: {
                return {
                    title: -1
                };
            }

            case SortOptions.TIME_ASC: {
                return {
                    time: 1
                };
            }

            case SortOptions.CALORIES_ASC: {
                return {
                    kCal: 1
                };
            }

            case SortOptions.CALORIES_DESC: {
                return {
                    kCal: -1
                };
            }
        }
    }

    async search(params: SearchDto): Promise<SearchResultsDto> {
        const mainAggregation = this.recipeModel.aggregate([
            { $match: { $or: [
                { $text: { $search: params.search } },
                // If no matches found, proceed partial match for the beginning of the title
                { title: new RegExp(`^${params.search}`, 'ig') },
            ] } },
            { $addFields: { id: '$_id' } },
            { $unset: ['_id', '__v', ...unsetList] },
            { $sort: this.getSortPipelineBySortOption(params.sort) }
        ]);

        const recipes = await mainAggregation.exec();
        const totalAggregationResult = await mainAggregation.count('total').exec();

        const { total } = totalAggregationResult.length ? totalAggregationResult[0] : { total: 0 };

        return new SearchResultsDto({
            recipes,
            total,
            sortOptions: Object.values(SortOptions).map((value) => ({
                value,
                isActive: value === params.sort
            })),
            filters: []
        });
    }
}
