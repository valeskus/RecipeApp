import { ApiProperty } from '@nestjs/swagger';

import { RecipeListItemDto } from './recipe-list-item.dto';
import { SortOptionDto } from './sort-option.dto';
import { FiltersDto } from './filters.dto';

class SearchResults {
    constructor(params: SearchResults) {
        this.recipes = params.recipes;
        this.total = params.total;
        this.sortOptions = params.sortOptions;
        this.filters = params.filters;
    }

    @ApiProperty({
        description: 'List of recipes',
        type: [RecipeListItemDto],
        required: true
    })
    readonly recipes: Array<RecipeListItemDto>;

    @ApiProperty({
        example: 5,
        description: 'Total number of found recipes',
        required: true
    })
    readonly total: number;

    @ApiProperty({
        description: 'List of applicable sort options',
        type: [SortOptionDto],
        required: true
    })
    readonly sortOptions: Array<SortOptionDto>;

    @ApiProperty({
        description: 'List of applicable filters',
        type: [FiltersDto],
        required: true
    })
    readonly filters: FiltersDto;
}

export { SearchResults as SearchResultsDto };
