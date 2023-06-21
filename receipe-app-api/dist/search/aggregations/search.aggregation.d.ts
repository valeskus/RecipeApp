import { PipelineStage } from 'mongoose';
import { RecipeListItemDto, SearchDto } from '../dto';
import { Calories, Difficulty, Facet, TotalTime } from '../models';
interface SearchAggregationParams {
    inputFilters: SearchDto;
}
export interface SearchAggregationResult {
    recipes: Array<RecipeListItemDto>;
    totals: [{
        total: number;
    }];
    difficulty: Facet<Difficulty>;
    totalTime: Facet<TotalTime>;
    calories: Facet<Calories>;
    mealType: Facet<string>;
    dietType: Facet<string>;
}
export declare class SearchAggregation extends Array<PipelineStage> {
    constructor({ inputFilters }: SearchAggregationParams);
}
export {};
