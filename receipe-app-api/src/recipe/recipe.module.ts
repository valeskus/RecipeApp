import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategoriesModule } from '../categories/categories.module';
import { ProductsModule } from '../products/products.module';

import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { Recipe, RecipeSchema } from './schemas';

@Module({
  imports: [
    CategoriesModule,
    ProductsModule,
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }])
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
