"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalTimeAggregation = void 0;
const models_1 = require("../models");
const ranged_facet_aggregation_1 = require("./ranged-facet.aggregation");
class TotalTimeAggregation extends ranged_facet_aggregation_1.RangedFacetAggregation {
    getFilterByField() {
        return 'time';
    }
    getFacetField() {
        return 'totalTime';
    }
    getFiltersData() {
        return {
            [models_1.TotalTime.lte20]: {
                value: 20,
                operator: '$lte',
            },
            [models_1.TotalTime.lte30]: {
                value: 30,
                operator: '$lte'
            },
            [models_1.TotalTime.lte45]: {
                value: 45,
                operator: '$lte'
            },
            [models_1.TotalTime.lte60]: {
                value: 60,
                operator: '$lte'
            },
            [models_1.TotalTime.gt60]: {
                value: 60,
                operator: '$gt'
            },
        };
    }
}
exports.TotalTimeAggregation = TotalTimeAggregation;
//# sourceMappingURL=total-time.aggregation.js.map