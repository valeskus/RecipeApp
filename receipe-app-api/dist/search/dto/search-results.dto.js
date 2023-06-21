"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResultsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const recipe_list_item_dto_1 = require("./recipe-list-item.dto");
const sort_option_dto_1 = require("./sort-option.dto");
const filters_dto_1 = require("./filters.dto");
class SearchResults {
    constructor(params) {
        this.recipes = params.recipes;
        this.total = params.total;
        this.sortOptions = params.sortOptions;
        this.filters = params.filters;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of recipes',
        type: [recipe_list_item_dto_1.RecipeListItemDto],
        required: true
    }),
    __metadata("design:type", Array)
], SearchResults.prototype, "recipes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: 'Total number of found recipes',
        required: true
    }),
    __metadata("design:type", Number)
], SearchResults.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of applicable sort options',
        type: [sort_option_dto_1.SortOptionDto],
        required: true
    }),
    __metadata("design:type", Array)
], SearchResults.prototype, "sortOptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of applicable filters',
        type: [filters_dto_1.FiltersDto],
        required: true
    }),
    __metadata("design:type", filters_dto_1.FiltersDto)
], SearchResults.prototype, "filters", void 0);
exports.SearchResultsDto = SearchResults;
//# sourceMappingURL=search-results.dto.js.map