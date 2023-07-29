import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { CategoriesModule } from './categories/categories.module';
import { SearchModule } from './search/search.module';
import { ProductsModule } from './products/products.module';
import { TranslationModule } from './translation/translation.module';
import { PreferredLanguageInterceptor } from './translation/preferred-language.interceptor';
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
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: PreferredLanguageInterceptor,
    },
  ],
})
export class AppModule { }
