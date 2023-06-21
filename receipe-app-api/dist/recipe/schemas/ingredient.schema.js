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
exports.Ingredient = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Ingredient = class Ingredient {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Meat',
        description: 'Name of the ingredient',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Ingredient.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 200,
        description: 'Amount of the ingredient according to product measurement units',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Ingredient.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'g',
        description: 'Measurement units',
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Ingredient.prototype, "units", void 0);
Ingredient = __decorate([
    (0, mongoose_1.Schema)()
], Ingredient);
exports.Ingredient = Ingredient;
//# sourceMappingURL=ingredient.schema.js.map