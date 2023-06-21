import { SearchService } from './search.service';
import { SearchDto, SearchResultsDto } from './dto';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    search(searchDto: SearchDto): Promise<SearchResultsDto>;
}
