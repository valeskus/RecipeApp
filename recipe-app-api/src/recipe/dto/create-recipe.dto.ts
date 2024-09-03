import {
    IsNotEmpty,
    IsString,
    ValidateNested,
    IsArray,
    ArrayNotEmpty,
    ArrayUnique,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, OmitType } from '@nestjs/swagger';

import { RecipeDataObject } from './recipe-data-object';
import { InstructionDataObject } from './instruction-data-object';
import { IngredientDataObject } from './ingredient-data-object';

class CreateInstructionDto extends InstructionDataObject {}

class PutIngredientDto extends OmitType(IngredientDataObject, ['title']) {}

class CreateRecipe extends OmitType(RecipeDataObject, ['id']) {
    @ApiProperty({
        example: ['6485e97f2fe21ff4fba5f7e4', '6485e37f2fe21ff4fba5f7e4'],
        description: 'Categories ids the recipe belongs to',
        type: [String],
        required: true,
    })
    @IsNotEmpty({ each: true })
    @IsString({ each: true })
    @ArrayUnique()
    @IsArray()
    readonly categories: Array<string>;

    @ApiProperty({
        description: 'Ingredients list',
        type: [PutIngredientDto],
        required: true,
    })
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => PutIngredientDto)
    readonly ingredients: Array<PutIngredientDto>;

    @ApiProperty({
        description: 'List of cooking instructions',
        type: [CreateInstructionDto],
        required: true
    })
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => CreateInstructionDto)
    readonly instructions: Array<CreateInstructionDto>;
}

export { CreateRecipe as CreateRecipeDto };
