import { FilterQuery, PipelineStage } from 'mongoose';

export interface RangedFacet {
    operator: string;
    value: number;
}

interface RangedFacetAggregationParams<T> {
    appliedFilter?: T;
}

export abstract class RangedFacetAggregation<T extends string> {
    public abstract getFacetField(): string;

    public abstract getFilterByField(): string;

    protected abstract getFiltersData(): Record<T, RangedFacet>;

    constructor({ appliedFilter }: RangedFacetAggregationParams<T>) {
        if (appliedFilter) {
            const FiltersData = this.getFiltersData();

            this.filter = {
                [this.getFilterByField()]: {
                    [FiltersData[appliedFilter].operator]: FiltersData[appliedFilter].value
                }
            };
        }
    }

    public filter: FilterQuery<unknown> = {};

    public get facet(): Record<string, Array<PipelineStage.FacetPipelineStage>> {
        const FiltersData = this.getFiltersData();

        return {
            [this.getFacetField()]: [
                {
                    $addFields: Object.keys(FiltersData).reduce((addFields, field) => {
                        const { operator, value } = FiltersData[field];

                        return {
                            ...addFields,
                            [field]: {
                                $cond: {
                                    if: { [operator]: [`$${this.getFilterByField()}`, value] }, then: 1, else: 0
                                }
                            }
                        };
                    }, {})
                },
                {
                    $group: {
                        _id: null,
                        ...Object.keys(FiltersData).reduce((groupFields, field) => {
                            return {
                                ...groupFields,
                                [field]: {
                                    $sum: `$${field}`
                                }
                            };
                        }, {}),
                    },
                },
                { $unset: ['_id'] },
                {
                    $project: {
                        items: { $objectToArray: '$$ROOT' }
                    }
                },
                { $unwind: '$items' },
                {
                    $group: {
                        _id: '$items',
                        value: {
                            $first: '$items.k'
                        },
                        count: {
                            $first: '$items.v'
                        }
                    }
                },
                { $unset: ['_id'] },
            ]
        };
    }
}
