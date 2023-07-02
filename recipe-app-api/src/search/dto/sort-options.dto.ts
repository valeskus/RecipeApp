import { SortOptions as SortOptionsModel } from '../models';

import { SortOptionDto } from './sort-option.dto';

interface SortOptionsParams {
    appliedSort: SortOptionsModel;
}

class SortOptions extends Array<SortOptionDto> {
    constructor({ appliedSort }: SortOptionsParams) {
        super();

        Object.values(SortOptionsModel).forEach((value, index) => {
            this[index] = new SortOptionDto({
                value,
                isActive: value === appliedSort
            });
        });
    }
}

export { SortOptions as SortOptionsDto };
