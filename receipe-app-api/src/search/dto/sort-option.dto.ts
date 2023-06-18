import { ApiProperty } from '@nestjs/swagger';

import { SortOptions } from '../models';

class SortOption {
    @ApiProperty({
        description: 'Sort value',
        example: SortOptions.ALPHABETICALLY_ASC,
        enum: SortOptions,
        required: true
    })
    readonly value: string;

    @ApiProperty({
        description: 'Indicator whether the sort value is applied',
        example: true,
        required: true
    })
    readonly isActive: boolean;
}

export { SortOption as SortOptionDto };
