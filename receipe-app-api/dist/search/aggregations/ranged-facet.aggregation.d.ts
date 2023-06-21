import { FilterQuery, PipelineStage } from 'mongoose';
export interface RangedFacet {
    operator: string;
    value: number;
}
interface RangedFacetAggregationParams<T> {
    appliedFilter?: T;
}
export declare abstract class RangedFacetAggregation<T extends string> {
    abstract getFacetField(): string;
    abstract getFilterByField(): string;
    protected abstract getFiltersData(): Record<T, RangedFacet>;
    constructor({ appliedFilter }: RangedFacetAggregationParams<T>);
    filter: FilterQuery<unknown>;
    get facet(): Record<string, Array<PipelineStage.FacetPipelineStage>>;
}
export {};
