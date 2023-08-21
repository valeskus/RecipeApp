import { SortOptions as SortOptionsModel } from '../models';

import { SortOptionDto } from './sort-option.dto';

interface SortOptionsParams {
    appliedSort: SortOptionsModel;
    translate: (selector: string) => string;
}

class SortOptions extends Array<SortOptionDto> {
    constructor({ appliedSort, translate }: SortOptionsParams) {
        super();

        Object.values(SortOptionsModel).forEach((value, index) => {
            this[index] = new SortOptionDto({
                value,
                isActive: value === appliedSort,
                title: translate(`search.sort.${value}`)
            });
        });
    }
}

export { SortOptions as SortOptionsDto };
