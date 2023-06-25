import { Transform } from 'class-transformer';
import { IsEnum, IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Calories, Difficulty, SortOptions, TotalTime } from '../models';

class Search {
    @ApiProperty({
        example: 'Banana',
        description: 'Search term',
        required: true,
    })
    @Transform(({ value }) => String(value || '').trim())
    // TODO: Filter out special characters
    @IsNotEmpty()
    @IsDefined()
    readonly search: string;

    @ApiProperty({
        example: SortOptions.RELEVANCE,
        enum: SortOptions,
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
}

export { Search as SearchDto };
