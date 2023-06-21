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
exports.CreateCategoryDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
class CreateCategory {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCategory.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the category',
        required: true
    }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateCategory.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: models_1.CategoryType.DIET,
        enum: models_1.CategoryType,
        description: 'Type of the category',
        required: true
    }),
    (0, class_validator_1.IsEnum)(models_1.CategoryType),
    __metadata("design:type", String)
], CreateCategory.prototype, "type", void 0);
exports.CreateCategoryDto = CreateCategory;
//# sourceMappingURL=create-category.dto.js.map