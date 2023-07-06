import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { TranslationsSchemaOf } from '../../translation/schemas';
import { Difficulty, Units } from '../models';

import { MacroNutrients } from './macro-nutrients.schema';
import { ShortCategory } from './short-category.schema';
import { Instruction } from './instruction.schema';
import { Ingredient } from './ingredient.schema';

Schema({
    _id: false,
});
class TranslatableRecipeItems {
    @Prop({ required: true, unique: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    instructions: Array<Instruction>;

    @Prop({ required: true })
    ingredients: Array<Ingredient>;

    @Prop({ required: true })
    categories: Array<ShortCategory>;

}

@Schema({
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret._id;
        }
    }
})
export class Recipe extends TranslationsSchemaOf(TranslatableRecipeItems) {
    readonly id: string;

    @Prop({ required: true })
    time: number;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    units: Units;

    @Prop({ required: true })
    kCal: number;

    @Prop({ required: true })
    servingsCount: number;

    @Prop({ required: true })
    macroNutrients: MacroNutrients;

    @Prop({ required: true })
    difficulty: Difficulty;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

// TODO: fix when search will be ready
// RecipeSchema.index({ title: 'text', 'categories.title': 'text' });
// RecipeSchema.index({
//     title: 1,
//     time: 1,
//     difficulty: 1,
//     kCal: 1,
//     'categories.title': 1,
// });
