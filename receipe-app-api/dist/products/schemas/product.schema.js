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
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Product = class Product {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the product',
        required: true
    }),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Maine CoonWheat flour',
        description: 'Title of the product',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 364,
        description: 'Amount of kilo calories (per 100 units)',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "kCal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10.33,
        description: 'Amount(units) of proteins (per 100 units)',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "proteins", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 76.31,
        description: 'Amount(units) of carbs (per 100 units)',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "carbs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2.5,
        description: 'Amount(units) of fats (per 100 units)',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "fats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ml',
        description: 'Measurement units',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "units", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform: (doc, ret) => {
                delete ret._id;
            }
        }
    })
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map