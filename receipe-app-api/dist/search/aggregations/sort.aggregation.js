"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortAggregation = void 0;
const getSortPipelineBySortOption = (sortOption) => {
    switch (sortOption) {
        case models_1.SortOptions.RELEVANCE: {
            return {
                score: { $meta: 'textScore' }
            };
        }
        case models_1.SortOptions.ALPHABETICALLY_ASC: {
            return {
                title: 1
            };
        }
        case models_1.SortOptions.ALPHABETICALLY_DESC: {
            return {
                title: -1
            };
        }
        case models_1.SortOptions.TIME_ASC: {
            return {
                time: 1
            };
        }
        case models_1.SortOptions.CALORIES_ASC: {
            return {
                kCal: 1
            };
        }
        case models_1.SortOptions.CALORIES_DESC: {
            return {
                kCal: -1
            };
        }
    }
};
const models_1 = require("../models");
class SortAggregation {
    constructor({ appliedSort }) {
        this.sortPipeline = getSortPipelineBySortOption(appliedSort);
    }
    get pipelineStage() {
        return {
            $sort: this.sortPipeline
        };
    }
}
exports.SortAggregation = SortAggregation;
//# sourceMappingURL=sort.aggregation.js.map