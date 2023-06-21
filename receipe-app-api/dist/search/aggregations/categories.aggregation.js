"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesAggregation = void 0;
class CategoriesAggregation {
    constructor({ appliedFilter, type }) {
        this.type = '';
        this.filter = {};
        if (appliedFilter) {
            this.filter = {
                $and: appliedFilter.map((item) => ({
                    'categories.title': item
                }))
            };
        }
        this.type = type;
    }
    get facet() {
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
exports.CategoriesAggregation = CategoriesAggregation;
//# sourceMappingURL=categories.aggregation.js.map