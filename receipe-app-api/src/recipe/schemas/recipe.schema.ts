import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { MacroNutrients } from './macro-nutrients.schema';
import { Instruction } from './instruction.schema';
import { Ingredient } from './ingredient.schema';

@Schema()
export class Recipe {
    @ApiProperty({
        example: 5,
        description: 'Time of cooking (minutes)',
        required: true
    })
    @Prop({ required: true })
    time: number;

    @ApiProperty({
        example: 'Lasagna',
        description: 'Title of the recipe',
        required: true
    })
    @Prop({ required: true })
    title: string;

    @ApiProperty({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the recipe',
        required: true
    })
    @Prop({ required: true })
    image: string;

    @ApiProperty({
        example: 200,
        description: 'Amount of the finished dish (units)',
        required: true
    })
    @Prop({ required: true })
    amount: number;

    @ApiProperty({
        example: 'ml',
        description: 'Measurement units of amount',
        required: true
    })
    @Prop({ required: true })
    units: 'ml' | 'g';

    @ApiProperty({
        example: 364,
        description: 'Amount of kilo calories (for full amount)',
    })
    @Prop({ required: true })
    kCal: number;

    @ApiProperty({
        example: "This lasagna recipe takes a little work, but it is so satisfying and filling that it's worth it!",
        description: 'Description of the recipe',
    })
    @Prop({ required: true })
    description: string;

    @ApiProperty({
        example: 2,
        description: 'Number of servings for full dish amount',
    })
    @Prop({ required: true })
    servingsCount: number;

    @ApiProperty({
        description: 'List of cooking instructions',
        type: [Instruction],
        required: true
    })
    @Prop({ required: true })
    instructions: Array<Instruction>;

    @ApiProperty({
        description: 'Macro nutrients list',
        required: true,
    })
    @Prop({ required: true })
    macroNutrients: MacroNutrients;

    @ApiProperty({
        description: 'Ingredients list',
        type: [Ingredient],
        required: true,
    })
    @Prop({ required: true })
    ingredients: Array<Ingredient>;

    @ApiProperty({
        example: ['Breakfast', 'Main dish'],
        description: 'Categories the recipe belongs to',
        required: true,
    })
    @Prop({ required: true })
    categories: Array<string>;

    @ApiProperty({
        example: 0,
        description: 'Difficulty of the recipe (0-2)',
        required: true,
    })
    @Prop({ required: true })
    difficulty: 0 | 1 | 2;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

RecipeSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id;
    }
});
