import { Calories } from '../models';

import { RangedFacetAggregation } from './ranged-facet.aggregation';

export class CaloriesAggregation extends RangedFacetAggregation<Calories> {
    public getFilterByField() {
        return 'kCal';
    }

    public getFacetField() {
        return 'calories';
    }

    protected getFiltersData() {
        // TODO: divide by 10
        return {
            [Calories.lte100]: {
                value: 1000,
                operator: '$lte',
            },
            [Calories.lte250]: {
                value: 2500,
                operator: '$lte'
            },
            [Calories.lte500]: {
                value: 5000,
                operator: '$lte'
            },
            [Calories.lte750]: {
                value: 7500,
                operator: '$lte'
            },
            [Calories.lte1000]: {
                value: 10000,
                operator: '$lte'
            },
            [Calories.gt1000]: {
                value: 10000,
                operator: '$gt'
            },
        };
    }
}
