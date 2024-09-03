const getSortPipelineBySortOption = (sortOption: SortOptions): PipelineStage.Sort['$sort'] => {
    switch (sortOption) {
        case SortOptions.RELEVANCE: {
            return {
                score: { $meta: 'textScore' },
                title: 1
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
                kCalPer100: 1,
            };
        }

        case SortOptions.CALORIES_DESC: {
            return {
                kCalPer100: -1,
            };
        }
    }
};

import { PipelineStage } from 'mongoose';

import { SortOptions } from '../models';

interface SortAggregationParams {
    appliedSort: SortOptions;
}

export class SortAggregation {
    private sortPipeline: PipelineStage.Sort['$sort'];

    constructor({ appliedSort }: SortAggregationParams) {
        this.sortPipeline = getSortPipelineBySortOption(appliedSort);
    }

    public get pipelineStage(): PipelineStage.Sort {
        return {
            $sort: this.sortPipeline
        };
    }
}
