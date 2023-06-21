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
exports.CategorySchema = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const models_1 = require("../models");
let Category = class Category {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the category',
        required: true
    }),
    __metadata("design:type", String)
], Category.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lunch',
        description: 'Name of the category',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Category.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the category',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Category.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: models_1.CategoryType.DIET,
        enum: models_1.CategoryType,
        description: 'Type of the category',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Category.prototype, "type", void 0);
Category = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform: (doc, ret) => {
                delete ret._id;
            }
        }
    })
], Category);
exports.Category = Category;
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);
//# sourceMappingURL=category.schema.js.map