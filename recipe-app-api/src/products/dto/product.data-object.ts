import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

import { TranslationsDtoOf } from '../../translation/dto';
import { Units } from '../models';

class TranslatableProductItems {
    @ApiProperty({
        example: 'Maine CoonWheat flour',
        description: 'Title of the product',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;
}

export class ProductDataObject extends TranslationsDtoOf(TranslatableProductItems) {
    @ApiProperty({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the product',
        required: true
    })
    readonly id: string;

    @ApiProperty({
        example: 364,
        description: 'Amount of kilo calories (per 100g)',
        required: true
    })
    @Min(0)
    @IsNumber()
    readonly kCal: number;

    @ApiProperty({
        example: 10.33,
        description: 'Amount(g) of proteins (per 100g)',
        required: true
    })
    @Min(0)
    @IsNumber()
    readonly proteins: number;

    @ApiProperty({
        example: 76.31,
        description: 'Amount(g) of proteins (per 100g)',
        required: true
    })
    @Min(0)
    @IsNumber()
    readonly carbs: number;

    @ApiProperty({
        example: 2.5,
        description: 'Amount(g) of fats (per 100g)',
        required: true
    })
    @Min(0)
    @IsNumber()
    readonly fats: number;

    @ApiProperty({
        example: Units.ML,
        enum: Units,
        description: 'Measurement units',
        required: true
    })
    @IsEnum(Units)
    readonly units: Units;
}
