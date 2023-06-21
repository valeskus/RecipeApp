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
exports.SearchDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
class Search {
    constructor() {
        this.sort = models_1.SortOptions.RELEVANCE;
        this.offset = 0;
        this.pageSize = 10;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Banana',
        description: 'Search term',
        required: true,
    }),
    (0, class_transformer_1.Transform)(({ value }) => String(value || '').trim()),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], Search.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: models_1.SortOptions.RELEVANCE,
        enum: models_1.SortOptions,
        default: models_1.SortOptions.RELEVANCE,
        description: 'Sort criteria',
        required: false,
    }),
    (0, class_validator_1.IsEnum)(models_1.SortOptions),
    __metadata("design:type", String)
], Search.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: models_1.Difficulty.easy,
        enum: models_1.Difficulty,
        description: 'Filter by difficulty',
        required: false,
    }),
    (0, class_validator_1.IsEnum)(models_1.Difficulty),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Search.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: models_1.TotalTime.gt60,
        enum: models_1.TotalTime,
        description: 'Filter by time range',
        required: false,
    }),
    (0, class_validator_1.IsEnum)(models_1.TotalTime),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Search.prototype, "totalTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: models_1.Calories.gt1000,
        enum: models_1.Calories,
        description: 'Filter by calories range',
        required: false,
    }),
    (0, class_validator_1.IsEnum)(models_1.Calories),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Search.prototype, "calories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Breakfast and Brunch|Comfort Food',
        description: 'Filter by meal types. Multiple items separated by "|"',
        format: 'item|item|...',
        type: String,
        required: false,
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.toString().split('|')),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], Search.prototype, "mealType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Healthy and Light|Comfort Food',
        description: 'Filter by diet types. Multiple items separated by "|"',
        format: 'item|item|...',
        type: String,
        required: false,
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.toString().split('|')),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], Search.prototype, "dietType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
        default: 0,
        description: 'Pagination offset',
        required: false,
    }),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Search.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        default: 10,
        description: 'Pagination page size',
        required: false,
    }),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Search.prototype, "pageSize", void 0);
exports.SearchDto = Search;
//# sourceMappingURL=search.dto.js.map