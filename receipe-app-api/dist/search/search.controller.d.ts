import { SearchService } from './search.service';
import { RecipeListModel } from './models';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    getHello(searchTerm: string): Promise<RecipeListModel>;
}
