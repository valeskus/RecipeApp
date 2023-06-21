/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { MacroNutrients } from './macro-nutrients.schema';
import { Instruction } from './instruction.schema';
import { Ingredient } from './ingredient.schema';
import { ShortCategory } from './short-category.schema';
export declare class Recipe {
    readonly id: string;
    time: number;
    title: string;
    image: string;
    amount: number;
    units: 'ml' | 'g';
    kCal: number;
    description: string;
    servingsCount: number;
    instructions: Array<Instruction>;
    macroNutrients: MacroNutrients;
    ingredients: Array<Ingredient>;
    categories: Array<ShortCategory>;
    difficulty: 0 | 1 | 2;
}
export declare const RecipeSchema: import("mongoose").Schema<Recipe, import("mongoose").Model<Recipe, any, any, any, import("mongoose").Document<unknown, any, Recipe> & Omit<Recipe & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Recipe, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Recipe>> & Omit<import("mongoose").FlatRecord<Recipe> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
