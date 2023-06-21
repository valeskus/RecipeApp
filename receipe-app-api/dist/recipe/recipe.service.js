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
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
const products_service_1 = require("../products/products.service");
const categories_service_1 = require("../categories/categories.service");
const schemas_1 = require("./schemas");
let RecipeService = class RecipeService {
    findOneByTitle(title) {
        return this.recipeModel.findOne({ title }).exec();
    }
    findOneById(id) {
        if (!(0, class_validator_1.isMongoId)(id)) {
            return Promise.resolve(null);
        }
        return this.recipeModel.findOne({ _id: id }).exec();
    }
    async create(createRecipeDto) {
        const found = await this.findOneByTitle(createRecipeDto.title);
        if (found) {
            throw new Error(`Recipe ${createRecipeDto.title} already exists`);
        }
        const categories = [];
        for (const categoryTitle of createRecipeDto.categories) {
            const category = await this.categoriesService.findOneByTitle(categoryTitle);
            if (!category) {
                throw new Error(`Category ${categoryTitle} does not exist`);
            }
            categories.push({
                title: category.title,
                type: category.type
            });
        }
        let kCal = 0;
        let fats = 0;
        let carbs = 0;
        let proteins = 0;
        for (const ingredient of createRecipeDto.ingredients) {
            const product = await this.productsService.findOneByTitle(ingredient.title);
            if (!product) {
                throw new Error(`Product ${ingredient.title} does not exist`);
            }
            const getNutritionFor = this.productsService.createGetterNutritionByAmount(ingredient.amount);
            kCal += getNutritionFor(product.kCal);
            fats += getNutritionFor(product.fats);
            carbs += getNutritionFor(product.carbs);
            proteins += getNutritionFor(product.proteins);
            Object.assign(ingredient, {
                units: product.units,
            });
        }
        const createdRecipe = new this.recipeModel(Object.assign(Object.assign({}, createRecipeDto), { kCal,
            categories, macroNutrients: {
                fats,
                carbs,
                proteins
            } }));
        return createdRecipe.save();
    }
};
__decorate([
    (0, mongoose_1.InjectModel)(schemas_1.Recipe.name),
    __metadata("design:type", mongoose_2.Model)
], RecipeService.prototype, "recipeModel", void 0);
__decorate([
    (0, common_1.Inject)(categories_service_1.CategoriesService),
    __metadata("design:type", categories_service_1.CategoriesService)
], RecipeService.prototype, "categoriesService", void 0);
__decorate([
    (0, common_1.Inject)(products_service_1.ProductsService),
    __metadata("design:type", products_service_1.ProductsService)
], RecipeService.prototype, "productsService", void 0);
RecipeService = __decorate([
    (0, common_1.Injectable)()
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map