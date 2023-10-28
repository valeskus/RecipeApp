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
        return {
            [Calories.lte100]: {
                value: 100,
                operator: '$lte'
            },
            [Calories.lte250]: {
                value: 250,
                operator: '$lte'
            },
            [Calories.lte500]: {
                value: 500,
                operator: '$lte'
            },
            [Calories.lte750]: {
                value: 750,
                operator: '$lte'
            },
            [Calories.lte1000]: {
                value: 1000,
                operator: '$lte'
            },
            [Calories.gt1000]: {
                value: 1000,
                operator: '$gt'
            },
        };
    }
}
