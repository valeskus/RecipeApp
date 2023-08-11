import { ApiProperty } from '@nestjs/swagger';

import { SortOptions } from '../models';

class SortOption {
    constructor(params: SortOption) {
        this.value = params.value;
        this.isActive = params.isActive;
        this.title = params.title;
    }

    @ApiProperty({
        description: 'Sort value',
        example: SortOptions.ALPHABETICALLY_ASC,
        enum: SortOptions,
        required: true
    })
    readonly value: string;

    @ApiProperty({
        description: 'Sort title (translatable)',
        example: 'by relevance',
        required: true
    })
    readonly title: string;

    @ApiProperty({
        description: 'Indicator whether the sort value is applied',
        example: true,
        required: true
    })
    readonly isActive: boolean;
}

export { SortOption as SortOptionDto };
