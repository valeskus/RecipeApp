import {Controller, Get, Query} from '@nestjs/common';
import {SearchService} from './search.service';
import {RecipeListModel} from './models';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  getHello(@Query('searchTerm') searchTerm: string): Promise<RecipeListModel> {
    return this.searchService.findBySearch(searchTerm);
  }
}
