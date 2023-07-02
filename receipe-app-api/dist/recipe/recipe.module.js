"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const categories_module_1 = require("../categories/categories.module");
const products_module_1 = require("../products/products.module");
const recipe_controller_1 = require("./recipe.controller");
const recipe_service_1 = require("./recipe.service");
const schemas_1 = require("./schemas");
const MongooseRecipeModule = mongoose_1.MongooseModule.forFeature([{ name: schemas_1.Recipe.name, schema: schemas_1.RecipeSchema }]);
let RecipeModule = class RecipeModule {
};
RecipeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            categories_module_1.CategoriesModule,
            products_module_1.ProductsModule,
            MongooseRecipeModule
        ],
        controllers: [recipe_controller_1.RecipeController],
        providers: [recipe_service_1.RecipeService],
        exports: [MongooseRecipeModule]
    })
], RecipeModule);
exports.RecipeModule = RecipeModule;
//# sourceMappingURL=recipe.module.js.map