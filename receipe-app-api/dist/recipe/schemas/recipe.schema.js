"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeSchema = exports.Recipe = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const macro_nutrients_schema_1 = require("./macro-nutrients.schema");
const instruction_schema_1 = require("./instruction.schema");
const ingredient_schema_1 = require("./ingredient.schema");
const short_category_schema_1 = require("./short-category.schema");
let Recipe = class Recipe {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the recipe',
        required: true
    }),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: 'Time of cooking (minutes)',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lasagna',
        description: 'Title of the recipe',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the recipe',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Recipe.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 200,
        description: 'Amount of the finished dish (units)',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ml',
        description: 'Measurement units of amount',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Recipe.prototype, "units", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 364,
        description: 'Amount of kilo calories (for full amount)',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "kCal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This lasagna recipe takes a little work, but it is so satisfying and filling that it\'s worth it!',
        description: 'Description of the recipe',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Number of servings for full dish amount',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "servingsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of cooking instructions',
        type: [instruction_schema_1.Instruction],
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Recipe.prototype, "instructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Macro nutrients list',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", macro_nutrients_schema_1.MacroNutrients)
], Recipe.prototype, "macroNutrients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingredients list',
        type: [ingredient_schema_1.Ingredient],
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [short_category_schema_1.ShortCategory],
        description: 'Categories the recipe belongs to',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Recipe.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
        description: 'Difficulty of the recipe (0-2)',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Recipe.prototype, "difficulty", void 0);
Recipe = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform: (doc, ret) => {
                delete ret._id;
            }
        }
    })
], Recipe);
exports.Recipe = Recipe;
exports.RecipeSchema = mongoose_1.SchemaFactory.createForClass(Recipe);
exports.RecipeSchema.index({ title: 'text', 'categories.title': 'text' });
exports.RecipeSchema.index({
    title: 1,
    time: 1,
    difficulty: 1,
    kCal: 1,
    'categories.title': 1,
});
//# sourceMappingURL=recipe.schema.js.map