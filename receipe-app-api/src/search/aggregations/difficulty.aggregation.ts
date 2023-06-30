import { FilterQuery, PipelineStage } from 'mongoose';

import { Difficulty } from '../models';

interface DifficultyAggregationParams {
    appliedFilter?: Difficulty;
}

export class DifficultyAggregation {
    constructor({ appliedFilter }: DifficultyAggregationParams) {
        if (appliedFilter !== undefined) {
            this.filter = {
                difficulty: appliedFilter
            };
        }
    }

    public filter: FilterQuery<unknown> = {};

    public facet: Record<'difficulty', Array<PipelineStage.FacetPipelineStage>> = {
        difficulty: [
            { $sortByCount: '$difficulty' },
            { $addFields: { value: '$_id' } },
            { $unset: ['_id'] },
        ]
    };
}
