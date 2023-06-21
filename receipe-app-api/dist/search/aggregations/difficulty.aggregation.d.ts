import { FilterQuery, PipelineStage } from 'mongoose';
import { Difficulty } from '../models';
interface DifficultyAggregationParams {
    appliedFilter?: Difficulty;
}
export declare class DifficultyAggregation {
    constructor({ appliedFilter }: DifficultyAggregationParams);
    filter: FilterQuery<unknown>;
    facet: Record<'difficulty', Array<PipelineStage.FacetPipelineStage>>;
}
export {};
