import { ApiProperty } from '@nestjs/swagger';

import { FilterValueDto } from './filterValue.dto';

class Filter<T> {
    @ApiProperty({
        description: 'List of applicable filter value',
        type: [FilterValueDto],
        required: true
    })
    readonly items: Array<FilterValueDto<T>>;

    @ApiProperty({
        example: 'Calories',
        description: 'Title of the filter value (translatable)',
        required: true
    })
    readonly title: string;

    @ApiProperty({
        example: true,
        description: 'Whether the filter receives single value or multiple values',
        required: true
    })
    readonly multiple: boolean;
}

export { Filter as FilterDto };
