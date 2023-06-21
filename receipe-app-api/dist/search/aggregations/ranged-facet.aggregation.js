"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangedFacetAggregation = void 0;
class RangedFacetAggregation {
    constructor({ appliedFilter }) {
        this.filter = {};
        if (appliedFilter) {
            const FiltersData = this.getFiltersData();
            this.filter = {
                [this.getFilterByField()]: {
                    [FiltersData[appliedFilter].operator]: FiltersData[appliedFilter].value
                }
            };
        }
    }
    get facet() {
        const FiltersData = this.getFiltersData();
        return {
            [this.getFacetField()]: [
                {
                    $addFields: Object.keys(FiltersData).reduce((addFields, field) => {
                        const { operator, value } = FiltersData[field];
                        return Object.assign(Object.assign({}, addFields), { [field]: {
                                $cond: {
                                    if: { [operator]: [`$${this.getFilterByField()}`, value] }, then: 1, else: 0
                                }
                            } });
                    }, {})
                },
                {
                    $group: Object.assign({ _id: null }, Object.keys(FiltersData).reduce((groupFields, field) => {
                        return Object.assign(Object.assign({}, groupFields), { [field]: {
                                $sum: `$${field}`
                            } });
                    }, {})),
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
exports.RangedFacetAggregation = RangedFacetAggregation;
//# sourceMappingURL=ranged-facet.aggregation.js.map