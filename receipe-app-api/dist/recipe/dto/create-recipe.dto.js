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
exports.CreateRecipeDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const ingredient_dto_1 = require("./ingredient.dto");
const instruction_dto_1 = require("./instruction.dto");
class CreateRecipe {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lasagna',
        description: 'Title of the recipe',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRecipe.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: 'Time of cooking (minutes)',
        required: true
    }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRecipe.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the recipe',
        required: true
    }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateRecipe.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 200,
        description: 'Amount of the finished dish (units)',
        required: true
    }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRecipe.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ml',
        description: 'Measurement units of amount',
        required: true
    }),
    (0, class_validator_1.Matches)(/^(ml|g)$/, {
        message: 'units should be either "ml" or "g"'
    }),
    __metadata("design:type", String)
], CreateRecipe.prototype, "units", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This lasagna recipe takes a little work, but it is so satisfying and filling that it\'s worth it!',
        description: 'Description of the recipe',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRecipe.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Number of servings for full dish amount',
        required: true,
    }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRecipe.prototype, "servingsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Breakfast', 'Main dish'],
        description: 'Categories the recipe belongs to',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.ArrayUnique)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateRecipe.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingredients list',
        type: [ingredient_dto_1.IngredientDto],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ingredient_dto_1.IngredientDto),
    __metadata("design:type", Array)
], CreateRecipe.prototype, "ingredients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of cooking instructions',
        type: [instruction_dto_1.InstructionDto],
        required: true
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => instruction_dto_1.InstructionDto),
    __metadata("design:type", Array)
], CreateRecipe.prototype, "instructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
        description: 'Difficulty of the recipe (0-2)',
        required: true,
    }),
    (0, class_validator_1.Max)(2),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRecipe.prototype, "difficulty", void 0);
exports.CreateRecipeDto = CreateRecipe;
//# sourceMappingURL=create-recipe.dto.js.map