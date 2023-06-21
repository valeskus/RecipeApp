import { FilterQuery, PipelineStage } from 'mongoose';
import { CategoryType } from '../../categories/models';
interface CategoriesAggregationParams {
    appliedFilter?: Array<string>;
    type: CategoryType;
}
export declare class CategoriesAggregation {
    private type;
    constructor({ appliedFilter, type }: CategoriesAggregationParams);
    filter: FilterQuery<unknown>;
    get facet(): Record<string, Array<PipelineStage.FacetPipelineStage>>;
}
export {};
