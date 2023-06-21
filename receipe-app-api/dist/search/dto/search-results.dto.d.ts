import { RecipeListItemDto } from './recipe-list-item.dto';
import { SortOptionDto } from './sort-option.dto';
import { FiltersDto } from './filters.dto';
declare class SearchResults {
    constructor(params: SearchResults);
    readonly recipes: Array<RecipeListItemDto>;
    readonly total: number;
    readonly sortOptions: Array<SortOptionDto>;
    readonly filters: FiltersDto;
}
export { SearchResults as SearchResultsDto };
