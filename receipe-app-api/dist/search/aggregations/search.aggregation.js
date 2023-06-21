"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAggregation = void 0;
const models_1 = require("../../categories/models");
const schemas_1 = require("../../recipe/schemas");
const dto_1 = require("../dto");
const categories_aggregation_1 = require("./categories.aggregation");
const difficulty_aggregation_1 = require("./difficulty.aggregation");
const total_time_aggregation_1 = require("./total-time.aggregation");
const calories_aggregation_1 = require("./calories.aggregation");
const sort_aggregation_1 = require("./sort.aggregation");
const recipeListItemDto = new dto_1.RecipeListItemDto({
    image: '',
    time: 0,
    title: '',
    kCal: 0,
    id: '',
});
const unsetList = Object.keys(schemas_1.RecipeSchema.obj).filter((key) => {
    return !recipeListItemDto.hasOwnProperty(key);
});
class SearchAggregation extends Array {
    constructor({ inputFilters }) {
        super();
        const caloriesAggregation = new calories_aggregation_1.CaloriesAggregation({
            appliedFilter: inputFilters.calories,
        });
        const totalTimeAggregation = new total_time_aggregation_1.TotalTimeAggregation({
            appliedFilter: inputFilters.totalTime,
        });
        const difficultyAggregation = new difficulty_aggregation_1.DifficultyAggregation({
            appliedFilter: inputFilters.difficulty,
        });
        const mealTypeAggregation = new categories_aggregation_1.CategoriesAggregation({
            appliedFilter: inputFilters.mealType,
            type: models_1.CategoryType.MEAL,
        });
        const dietTypeAggregation = new categories_aggregation_1.CategoriesAggregation({
            appliedFilter: inputFilters.dietType,
            type: models_1.CategoryType.DIET,
        });
        const sortAggregation = new sort_aggregation_1.SortAggregation({
            appliedSort: inputFilters.sort
        });
        const data = [
            {
                $match: {
                    $or: [
                        { $text: { $search: inputFilters.search } },
                        { title: new RegExp(`^${inputFilters.search}`, 'ig') },
                    ],
                    $and: [
                        difficultyAggregation.filter,
                        totalTimeAggregation.filter,
                        caloriesAggregation.filter,
                        mealTypeAggregation.filter,
                        dietTypeAggregation.filter,
                    ]
                },
            },
            sortAggregation.pipelineStage,
            {
                $facet: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, caloriesAggregation.facet), totalTimeAggregation.facet), difficultyAggregation.facet), mealTypeAggregation.facet), dietTypeAggregation.facet), { recipes: [
                        { $addFields: { id: '$_id' } },
                        { $unset: ['_id', '__v', ...unsetList] },
                        { $skip: inputFilters.offset },
                        { $limit: inputFilters.pageSize }
                    ], totals: [
                        { $count: 'total' }
                    ] })
            }
        ];
        data.forEach((item, index) => this[index] = item);
    }
}
exports.SearchAggregation = SearchAggregation;
//# sourceMappingURL=search.aggregation.js.map