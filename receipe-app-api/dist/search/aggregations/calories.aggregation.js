"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaloriesAggregation = void 0;
const models_1 = require("../models");
const ranged_facet_aggregation_1 = require("./ranged-facet.aggregation");
class CaloriesAggregation extends ranged_facet_aggregation_1.RangedFacetAggregation {
    getFilterByField() {
        return 'kCal';
    }
    getFacetField() {
        return 'calories';
    }
    getFiltersData() {
        return {
            [models_1.Calories.lte100]: {
                value: 1000,
                operator: '$lte',
            },
            [models_1.Calories.lte250]: {
                value: 2500,
                operator: '$lte'
            },
            [models_1.Calories.lte500]: {
                value: 5000,
                operator: '$lte'
            },
            [models_1.Calories.lte750]: {
                value: 7500,
                operator: '$lte'
            },
            [models_1.Calories.lte1000]: {
                value: 10000,
                operator: '$lte'
            },
            [models_1.Calories.gt1000]: {
                value: 10000,
                operator: '$gt'
            },
        };
    }
}
exports.CaloriesAggregation = CaloriesAggregation;
//# sourceMappingURL=calories.aggregation.js.map