"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DifficultyAggregation = void 0;
class DifficultyAggregation {
    constructor({ appliedFilter }) {
        this.filter = {};
        this.facet = {
            difficulty: [
                { $sortByCount: '$difficulty' },
                { $addFields: { value: '$_id' } },
                { $unset: ['_id'] },
            ]
        };
        if (appliedFilter !== undefined) {
            this.filter = {
                difficulty: appliedFilter
            };
        }
    }
}
exports.DifficultyAggregation = DifficultyAggregation;
//# sourceMappingURL=difficulty.aggregation.js.map