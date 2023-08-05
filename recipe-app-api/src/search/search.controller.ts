import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AcceptLanguageHeader } from '../translation/accept-language-header-swagger.decorator';

import { SearchService } from './search.service';
import { SearchDto, SearchResultsDto } from './dto';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) { }

  @Get()
  @AcceptLanguageHeader()
  @ApiOperation({ summary: 'Search for recipes' })
  @ApiOkResponse({
    description: 'Returns a list of found recipes',
    type: SearchResultsDto
  })
  search(@Query() searchDto: SearchDto) {
    return this.searchService.search(searchDto);
  }
}
