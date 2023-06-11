import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsPositive,
    IsUrl,
    Matches,
    ValidateNested,
    IsArray,
    ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { IngredientDto } from './ingredient.dto';
import { InstructionDto } from './instruction.dto';

class CreateRecipe {
    @ApiProperty({
        example: 'Lasagna',
        description: 'Title of the recipe',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly title: string;

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
        example: 'ml',
        description: 'Measurement units of amount',
        required: true
    })
    @Matches(/^(ml|g)$/, {
        message: 'Units should be either "ml" or "g"'
    })
    readonly units: 'ml' | 'g';

    @ApiProperty({
        example: "This lasagna recipe takes a little work, but it is so satisfying and filling that it's worth it!",
        description: 'Description of the recipe',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @ApiProperty({
        example: 2,
        description: 'Number of servings for full dish amount',
        required: true,
    })
    @IsPositive()
    @IsNumber()
    readonly servingsCount: number;

    @ApiProperty({
        example: ['Breakfast', 'Main dish'],
        description: 'Categories the recipe belongs to',
        required: true,
    })
    @IsNotEmpty({ each: true })
    @IsString({ each: true })
    @IsArray()
    readonly categories: Array<string>;

    // TODO: Examples
    @ApiProperty({
        description: 'Ingredients list',
        required: true,
    })
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => IngredientDto)
    readonly ingredients: Array<IngredientDto>;

    // TODO: Examples
    @ApiProperty({
        description: 'List of cooking instructions',
        required: true
    })
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => InstructionDto)
    readonly instructions: Array<InstructionDto>;

    // TODO: difficulty
}

export { CreateRecipe as CreateRecipeDto };
