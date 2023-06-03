import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { CategoriesModule } from './categories/categories.module';
import { SearchModule } from './search/search.module';

// eslint-disable-next-line max-len
const DBUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(DBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    RecipeModule,
    CategoriesModule,
    SearchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
