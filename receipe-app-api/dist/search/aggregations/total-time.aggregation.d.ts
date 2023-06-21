import { TotalTime } from '../models';
import { RangedFacetAggregation } from './ranged-facet.aggregation';
export declare class TotalTimeAggregation extends RangedFacetAggregation<TotalTime> {
    getFilterByField(): string;
    getFacetField(): string;
    protected getFiltersData(): {
        lte20: {
            value: number;
            operator: string;
        };
        lte30: {
            value: number;
            operator: string;
        };
        lte45: {
            value: number;
            operator: string;
        };
        lte60: {
            value: number;
            operator: string;
        };
        gt60: {
            value: number;
            operator: string;
        };
    };
}
