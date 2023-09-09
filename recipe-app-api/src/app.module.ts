import { Module } from '@nestjs/common';

import { RecipeModule } from './recipe/recipe.module';
import { CategoriesModule } from './categories/categories.module';
import { SearchModule } from './search/search.module';
import { ProductsModule } from './products/products.module';
import { TranslationModule } from './translation/translation.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [
    MongoModule,
    RecipeModule,
    CategoriesModule,
    SearchModule,
    ProductsModule,
    TranslationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
