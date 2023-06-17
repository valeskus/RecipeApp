import { Transform } from 'class-transformer';
import { IsEnum, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { SortOptions } from '../models';

class Search {
    @ApiProperty({
        example: 'Banana',
        description: 'Search term',
        required: true,
    })
    @Transform(({ value }) => {
        return String(value || '').trim();
    })
    @IsDefined()
    readonly search: string;

    @ApiProperty({
        example: SortOptions.RELEVANCE,
        enum: SortOptions,
        description: 'Sort criteria',
        required: true,
    })
    @IsEnum(SortOptions)
    readonly sort: SortOptions;
}

export { Search as SearchDto };
