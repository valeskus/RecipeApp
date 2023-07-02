import { TotalTime } from '../models';

import { RangedFacetAggregation } from './ranged-facet.aggregation';

export class TotalTimeAggregation extends RangedFacetAggregation<TotalTime> {
    public getFilterByField() {
        return 'time';
    }

    public getFacetField() {
        return 'totalTime';
    }

    protected getFiltersData() {
        return {
            [TotalTime.lte20]: {
                value: 20,
                operator: '$lte',
            },
            [TotalTime.lte30]: {
                value: 30,
                operator: '$lte'
            },
            [TotalTime.lte45]: {
                value: 45,
                operator: '$lte'
            },
            [TotalTime.lte60]: {
                value: 60,
                operator: '$lte'
            },
            [TotalTime.gt60]: {
                value: 60,
                operator: '$gt'
            },
        };
    }
}
