import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Recipe } from '../recipe/schemas';

import { SearchDto, SearchResultsDto, FiltersDto, SortOptionsDto } from './dto';
import { SearchAggregation, SearchAggregationResult } from './aggregations';

@Injectable()
export class SearchService {
    @InjectModel(Recipe.name) private recipeModel: Model<Recipe>;

    async search(params: SearchDto): Promise<SearchResultsDto> {
        const [{
            recipes,
            totals,
            difficulty,
            calories,
            mealType,
            dietType,
            totalTime
        }] = await this.recipeModel.aggregate<SearchAggregationResult>(new SearchAggregation({
            inputFilters: params,
        })).exec();

        return new SearchResultsDto({
            filters: new FiltersDto({
                inputFilters: params,
                calories,
                totalTime,
                difficulty,
                mealType,
                dietType,
            }),
            recipes,
            total: totals[0]?.total || 0,
            sortOptions: new SortOptionsDto({
                appliedSort: params.sort
            })
        });
    }
}
