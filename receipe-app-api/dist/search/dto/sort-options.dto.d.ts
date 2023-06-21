import { SortOptions as SortOptionsModel } from '../models';
import { SortOptionDto } from './sort-option.dto';
interface SortOptionsParams {
    appliedSort: SortOptionsModel;
}
declare class SortOptions extends Array<SortOptionDto> {
    constructor({ appliedSort }: SortOptionsParams);
}
export { SortOptions as SortOptionsDto };
