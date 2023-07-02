import { FilterQuery, PipelineStage } from 'mongoose';

import { CategoryType } from '../../categories/models';

interface CategoriesAggregationParams {
    appliedFilter?: Array<string>;
    type: CategoryType;
}

export class CategoriesAggregation {
    private type = '';

    constructor({ appliedFilter, type }: CategoriesAggregationParams) {
        if (appliedFilter) {
            this.filter = {
                $and: appliedFilter.map((item) => ({
                    'categories.title': item
                }))
            };
        }

        this.type = type;
    }

    public filter: FilterQuery<unknown> = {};

    public get facet(): Record<string, Array<PipelineStage.FacetPipelineStage>> {
        return {
            [`${this.type}Type`]: [
                { $unwind: '$categories' },
                { $sortByCount: '$categories' },
                { $match: { '_id.type': this.type } },
                { $addFields: { value: '$_id.title' } },
                { $unset: ['_id'] }
            ]
        };
    }
}
