import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RecipeModule} from './recipe/recipe.module';
import {CategoriesModule} from './categories/categories.module';
import {SearchModule} from './search/search.module';

@Module({
  imports: [RecipeModule, CategoriesModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
