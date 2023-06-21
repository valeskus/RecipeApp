import { SearchDto, SearchResultsDto } from './dto';
export declare class SearchService {
    private recipeModel;
    search(params: SearchDto): Promise<SearchResultsDto>;
}
