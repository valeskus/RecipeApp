import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsPositive,
    IsUrl,
    IsEnum,
    IsArray,
    ArrayMinSize,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { TranslationsDtoOf } from '../../translation/dto';
import { Difficulty, Units } from '../models';

class TranslatableRecipeItems {
    @ApiProperty({
        example: 'Lasagna',
        description: 'Title of the recipe',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty({
        example: 'This lasagna recipe takes a little work, but it is so satisfying and filling that it\'s worth it!',
        description: 'Description of the recipe',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @ApiProperty({
        example: ['cheese', 'crepe', 'yeast'],
        description: 'Keywords associated with the recipe',
        required: true,
    })
    @IsArray()
    @IsNotEmpty({ each: true })
    @IsString({ each: true })
    @ArrayMinSize(1)
    readonly tags: Array<string>;
}

export class RecipeDataObject extends TranslationsDtoOf(TranslatableRecipeItems) {
    @ApiProperty({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the recipe',
        required: true
    })
    readonly id: string;

    @ApiProperty({
        example: 5,
        description: 'Time of cooking (minutes)',
        required: true
    })
    @IsPositive()
    @IsNumber()
    readonly time: number;

    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the recipe',
        required: true
    })
    @IsUrl()
    readonly image: string;

    @ApiProperty({
        example: 200,
        description: 'Amount of the finished dish (units)',
        required: true
    })
    @IsPositive()
    @IsNumber()
    readonly amount: number;

    @ApiProperty({
        example: Units.ML,
        description: 'Measurement units of amount',
        required: true,
        enum: Units
    })
    @IsEnum(Units)
    readonly units: Units;

    @ApiProperty({
        example: 2,
        description: 'Number of servings for full dish amount',
        required: true,
    })
    @IsPositive()
    @IsNumber()
    readonly servingsCount: number;

    @ApiProperty({
        example: Difficulty.easy,
        enum: Difficulty,
        description: 'Difficulty of the recipe (0-2)',
        required: true,
    })
    @IsEnum(Difficulty)
    @IsNumber()
    readonly difficulty: Difficulty;
}
