import { Module } from '@nestjs/common';

import { RecipeModule } from '../recipe/recipe.module';

import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  providers: [SearchService],
  controllers: [SearchController],
  imports: [RecipeModule]
})
export class SearchModule {}
