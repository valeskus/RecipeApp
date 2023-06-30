import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategoriesModule } from '../categories/categories.module';
import { ProductsModule } from '../products/products.module';

import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { Recipe, RecipeSchema } from './schemas';

const MongooseRecipeModule = MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]);

@Module({
  imports: [
    CategoriesModule,
    ProductsModule,
    MongooseRecipeModule
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
  exports: [MongooseRecipeModule]
})
export class RecipeModule { }
