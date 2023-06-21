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
exports.CreateProductDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProduct {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Maine CoonWheat flour',
        description: 'Title of the product',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProduct.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 364,
        description: 'Amount of kilo calories (per 100g)',
        required: true
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProduct.prototype, "kCal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10.33,
        description: 'Amount(g) of proteins (per 100g)',
        required: true
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProduct.prototype, "proteins", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 76.31,
        description: 'Amount(g) of proteins (per 100g)',
        required: true
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProduct.prototype, "carbs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2.5,
        description: 'Amount(g) of fats (per 100g)',
        required: true
    }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProduct.prototype, "fats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ml',
        description: 'Measurement units',
    }),
    (0, class_validator_1.Matches)(/^(ml|g)$/, {
        message: 'units should be either "ml" or "g"'
    }),
    __metadata("design:type", String)
], CreateProduct.prototype, "units", void 0);
exports.CreateProductDto = CreateProduct;
//# sourceMappingURL=create-product.dto.js.map