import { ApiProperty } from '@nestjs/swagger';

class Filter<T> {
    @ApiProperty({
        examples: ['lte20', 'Breakfast and Brunch|Comfort Food', '1'],
        description: 'Value of filter',
        type: String,
        required: true
    })
    readonly value: T;

    @ApiProperty({
        example: 10,
        description: 'Number of recipes applicable to this filter',
        required: true
    })
    readonly count: number;

    @ApiProperty({
        example: true,
        description: 'Indicator whether the filter is applied to the recipes list',
        required: true
    })
    readonly isActive: boolean;
}

export { Filter as FilterDto };
