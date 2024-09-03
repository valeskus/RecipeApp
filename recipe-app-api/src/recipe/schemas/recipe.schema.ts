import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IndexDefinition } from 'mongoose';

import { Difficulty, Units } from '../models';

import { MacroNutrients } from './macro-nutrients.schema';
import { ShortCategory } from './short-category.schema';
import { Instruction } from './instruction.schema';
import { Ingredient } from './ingredient.schema';

export class Recipe {
    readonly id: string;

    @Prop({ required: true, unique: true, index: 1 })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    instructions: Array<Instruction>;

    @Prop({ required: true })
    ingredients: Array<Ingredient>;

    @Prop({ required: true })
    categories: Array<ShortCategory>;

    @Prop({ required: true, index: 1 })
    time: number;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    units: Units;

    @Prop({ required: true, index: 1 })
    kCal: number;

    @Prop({ required: true, index: 1 })
    kCalPer100: number;

    @Prop({ required: true })
    servingsCount: number;

    @Prop({ required: true })
    macroNutrients: MacroNutrients;

    @Prop({ required: true, index: 1 })
    difficulty: Difficulty;

    @Prop({ required: true, index: 1 })
    tags: Array<string>;
}

const schemaOptions: SchemaOptions = {
    autoIndex: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret._id;
        }
    }
};

@Schema(schemaOptions)
export class RecipeEN extends Recipe { }
@Schema(schemaOptions)
export class RecipeUA extends Recipe { }

export const RecipeSchemaUA = SchemaFactory.createForClass(RecipeUA);
export const RecipeSchemaEN = SchemaFactory.createForClass(RecipeEN);

const textIndex: IndexDefinition = {
    title: 'text',
    'categories.title': 'text',
};

RecipeSchemaUA.index(textIndex);
RecipeSchemaEN.index(textIndex);
