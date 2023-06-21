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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const schemas_1 = require("../recipe/schemas");
const dto_1 = require("./dto");
const aggregations_1 = require("./aggregations");
let SearchService = class SearchService {
    async search(params) {
        var _a;
        const [{ recipes, totals, difficulty, calories, mealType, dietType, totalTime }] = await this.recipeModel.aggregate(new aggregations_1.SearchAggregation({
            inputFilters: params,
        })).exec();
        return new dto_1.SearchResultsDto({
            filters: new dto_1.FiltersDto({
                inputFilters: params,
                calories,
                totalTime,
                difficulty,
                mealType,
                dietType,
            }),
            recipes,
            total: ((_a = totals[0]) === null || _a === void 0 ? void 0 : _a.total) || 0,
            sortOptions: new dto_1.SortOptionsDto({
                appliedSort: params.sort
            })
        });
    }
};
__decorate([
    (0, mongoose_2.InjectModel)(schemas_1.Recipe.name),
    __metadata("design:type", mongoose_1.Model)
], SearchService.prototype, "recipeModel", void 0);
SearchService = __decorate([
    (0, common_1.Injectable)()
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map