import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { RecipeUA, RecipeEN, Recipe } from '../recipe/schemas';
import { TranslationService } from '../translation/translation.service';

import { SearchDto, SearchResultsDto, FiltersDto, SortOptionsDto } from './dto';
import { SearchAggregation, SearchAggregationResult } from './aggregations';

@Injectable()
export class SearchService {
    @InjectModel(RecipeUA.name) private recipeModelUA: Model<Recipe>;
    @InjectModel(RecipeEN.name) private recipeModelEN: Model<Recipe>;
    @Inject(TranslationService) private readonly translationService: TranslationService;

    async search(params: SearchDto): Promise<SearchResultsDto> {
        const model = this.translationService.forCurrentLanguage<Model<Recipe>>({
            ua: () => this.recipeModelUA,
            en: () => this.recipeModelEN,
        });

        const [{
            recipes,
            pageData,
            difficulty,
            calories,
            mealType,
            dietType,
            totalTime
        }] = await model.aggregate<SearchAggregationResult>(new SearchAggregation({
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
            total: pageData[0]?.total || 0,
            sortOptions: new SortOptionsDto({
                appliedSort: params.sort
            })
        });
    }
}
