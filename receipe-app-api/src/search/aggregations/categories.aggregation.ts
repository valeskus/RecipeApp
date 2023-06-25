import { FilterQuery, PipelineStage } from 'mongoose';

interface CategoriesAggregationParams {
    appliedFilter?: Array<string>;
    facetName: string;
}

export class CategoriesAggregation {
    private facetName = '';

    constructor({ appliedFilter, facetName }: CategoriesAggregationParams) {
        if (appliedFilter) {
            this.filter = {
                $and: appliedFilter.map((item) => ({
                    'categories.title': item
                }))
            };
        }

        this.facetName = facetName;
    }

    public filter: FilterQuery<unknown> = {};

    public get facet(): Record<string, Array<PipelineStage.FacetPipelineStage>> {
        return {
            [this.facetName]: [
                { $unwind: '$categories' },
                { $sortByCount: '$categories' },
                { $match: { '_id.type': 'meal' } },
                { $addFields: { value: '$_id.title' } },
                { $unset: ['_id'] }
            ]
        };
    }
}
