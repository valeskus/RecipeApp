import { Transform } from 'class-transformer';
import { IsEnum, IsDefined, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Calories, Difficulty, SortOptions, TotalTime } from '../models';

class Search {
    @ApiProperty({
        example: 'Banana',
        description: 'Search term',
        required: true,
    })
    @Transform(({ value }) => {
        // If all characters are filtered out, force the application to return an empty search result
        return String(value || '').replace(/[^\p{Letter}\s\d-]/ug, '').trim() || '^$';
    })
    @IsDefined()
    readonly search: string;

    @ApiProperty({
        example: SortOptions.RELEVANCE,
        enum: SortOptions,
        default: SortOptions.RELEVANCE,
        description: 'Sort criteria',
        required: false,
    })
    @IsEnum(SortOptions)
    readonly sort: SortOptions = SortOptions.RELEVANCE;

    @ApiProperty({
        example: Difficulty.easy,
        enum: Difficulty,
        description: 'Filter by difficulty',
        required: false,
    })
    @IsEnum(Difficulty)
    @Transform(({ value }) => Number(value))
    @IsOptional()
    readonly difficulty?: Difficulty;

    @ApiProperty({
        example: TotalTime.gt60,
        enum: TotalTime,
        description: 'Filter by time range',
        required: false,
    })
    @IsEnum(TotalTime)
    @IsOptional()
    readonly totalTime?: TotalTime;

    @ApiProperty({
        example: Calories.gt1000,
        enum: Calories,
        description: 'Filter by calories range',
        required: false,
    })
    @IsEnum(Calories)
    @IsOptional()
    readonly calories?: Calories;

    @ApiProperty({
        example: 'Breakfast and Brunch|Comfort Food',
        description: 'Filter by meal types. Multiple items separated by "|"',
        format: 'item|item|...',
        type: String,
        required: false,
    })
    @Transform(({ value }) => value.toString().split('|'))
    @IsOptional()
    readonly mealType?: Array<string>;

    @ApiProperty({
        example: 'Healthy and Light|Comfort Food',
        description: 'Filter by diet types. Multiple items separated by "|"',
        format: 'item|item|...',
        type: String,
        required: false,
    })
    @Transform(({ value }) => value.toString().split('|'))
    @IsOptional()
    readonly dietType?: Array<string>;

    @ApiProperty({
        example: 0,
        default: 0,
        description: 'Pagination offset',
        required: false,
    })
    @Transform(({ value }) => Number(value))
    @IsOptional()
    readonly offset: number = 0;

    @ApiProperty({
        example: 10,
        default: 10,
        description: 'Pagination page size',
        required: false,
    })
    @Transform(({ value }) => Number(value))
    @IsOptional()
    readonly pageSize: number = 10;
}

export { Search as SearchDto };
