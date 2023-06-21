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
exports.FiltersDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const filter_dto_1 = require("./filter.dto");
const filterOutEmpty = (list) => {
    return list.filter((item) => item.count);
};
const singleFilterTransformation = (list, appliedFilter) => {
    return filterOutEmpty(list).map((item) => (Object.assign(Object.assign({}, item), { isActive: appliedFilter === item.value })));
};
const multipleFilterTransformation = (list, appliedFilter) => {
    return filterOutEmpty(list).map((item) => (Object.assign(Object.assign({}, item), { isActive: (appliedFilter === null || appliedFilter === void 0 ? void 0 : appliedFilter.includes(item.value)) || false })));
};
class Filters {
    constructor(params) {
        this.calories = singleFilterTransformation(params.calories, params.inputFilters.calories);
        this.totalTime = singleFilterTransformation(params.totalTime, params.inputFilters.totalTime);
        this.difficulty = singleFilterTransformation(params.difficulty, params.inputFilters.difficulty);
        this.mealType = multipleFilterTransformation(params.mealType, params.inputFilters.mealType);
        this.dietType = multipleFilterTransformation(params.dietType, params.inputFilters.dietType);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of applicable filters by calories',
        type: [filter_dto_1.FilterDto],
        required: true
    }),
    __metadata("design:type", Array)
], Filters.prototype, "calories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of applicable filters by cooking time',
        type: [filter_dto_1.FilterDto],
        required: true
    }),
    __metadata("design:type", Array)
], Filters.prototype, "totalTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of applicable filters by difficulty',
        type: [filter_dto_1.FilterDto],
        required: true
    }),
    __metadata("design:type", Array)
], Filters.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of applicable filters by meal type category',
        type: [String],
        required: true
    }),
    __metadata("design:type", Array)
], Filters.prototype, "mealType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of applicable filters by diet type category',
        type: [String],
        required: true
    }),
    __metadata("design:type", Array)
], Filters.prototype, "dietType", void 0);
exports.FiltersDto = Filters;
//# sourceMappingURL=filters.dto.js.map