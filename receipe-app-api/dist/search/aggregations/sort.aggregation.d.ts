import { PipelineStage } from 'mongoose';
import { SortOptions } from '../models';
interface SortAggregationParams {
    appliedSort: SortOptions;
}
export declare class SortAggregation {
    private sortPipeline;
    constructor({ appliedSort }: SortAggregationParams);
    get pipelineStage(): PipelineStage.Sort;
}
export {};
