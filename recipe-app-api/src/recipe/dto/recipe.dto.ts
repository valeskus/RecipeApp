import { ApiProperty, OmitType } from '@nestjs/swagger';

import { CategoryType } from '../../categories/models';
import { Units } from '../models';

import { RecipeDataObject } from './recipe-data-object';
import { IngredientDataObject } from './ingredient-data-object';
import { InstructionDataObject } from './instruction-data-object';

class GetIngredientDto extends OmitType(IngredientDataObject, ['id']) {
    @ApiProperty({
        example: Units.G,
        enum: Units,
        description: 'Measurement units',
        required: true
    })
    readonly units: Units;

    @ApiProperty({
        example: 10,
        description: 'Amount of the product per 1 serving',
        required: true
    })
    readonly amountPerServing: number;
}

class GetInstructionDto extends OmitType(InstructionDataObject, ['translations']) { }

class CategoryDto {
    @ApiProperty({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    })
    readonly title: string;

    @ApiProperty({
        example: CategoryType.DIET,
        enum: CategoryType,
        description: 'Type of the category',
        required: true
    })
    readonly type: CategoryType;
}

 class MacroNutrients {
    @ApiProperty({
        example: 200,
        description: 'Amount(g) of proteins (for full amount)',
        required: true
    })
    readonly proteins: number;

    @ApiProperty({
        example: 10.33,
        description: 'Amount(g) of carbs (for full amount)',
        required: true
    })
    readonly carbs: number;

    @ApiProperty({
        example: 13,
        description: 'Amount(g) of fats (for full amount)',
        required: true
    })
    readonly fats: number;
}

class Recipe extends OmitType(RecipeDataObject, ['translations']) {
    @ApiProperty({
        example: 364,
        description: 'Amount of kilo calories (for full amount)',
        required: true
    })
    kCal: number;

    @ApiProperty({
        description: 'Ingredients list',
        type: [GetIngredientDto],
        required: true,
    })
    readonly ingredients: Array<GetIngredientDto>;

    @ApiProperty({
        description: 'List of cooking instructions',
        type: [GetInstructionDto],
        required: true
    })
    readonly instructions: Array<GetInstructionDto>;

    @ApiProperty({
        description: 'Categories the recipe belongs to',
        type: [CategoryDto],
        required: true,
    })
    readonly categories: Array<CategoryDto>;

    @ApiProperty({
        description: 'Macro nutrients list',
        type: MacroNutrients,
        required: true,
    })
    readonly macroNutrients: MacroNutrients;
}

export { Recipe as RecipeDto };
