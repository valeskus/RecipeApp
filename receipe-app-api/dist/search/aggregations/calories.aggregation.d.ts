import { Calories } from '../models';
import { RangedFacetAggregation } from './ranged-facet.aggregation';
export declare class CaloriesAggregation extends RangedFacetAggregation<Calories> {
    getFilterByField(): string;
    getFacetField(): string;
    protected getFiltersData(): {
        lte100: {
            value: number;
            operator: string;
        };
        lte250: {
            value: number;
            operator: string;
        };
        lte500: {
            value: number;
            operator: string;
        };
        lte750: {
            value: number;
            operator: string;
        };
        lte1000: {
            value: number;
            operator: string;
        };
        gt1000: {
            value: number;
            operator: string;
        };
    };
}
