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
exports.RecipeListItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RecipeListItem {
    constructor(params) {
        if (params) {
            this.image = params.image;
            this.kCal = params.kCal;
            this.time = params.time;
            this.title = params.title;
        }
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '6485e97f2fe21ff4fba5f7e4',
        description: 'Id of the recipe',
        required: true
    }),
    __metadata("design:type", String)
], RecipeListItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: 'Time of cooking (minutes)',
        required: true
    }),
    __metadata("design:type", Number)
], RecipeListItem.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lasagna',
        description: 'Title of the recipe',
        required: true
    }),
    __metadata("design:type", String)
], RecipeListItem.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://picsum.photos/500/500',
        description: 'Url for the image of the recipe',
        required: true
    }),
    __metadata("design:type", String)
], RecipeListItem.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 364,
        description: 'Amount of kilo calories (for full amount)',
    }),
    __metadata("design:type", Number)
], RecipeListItem.prototype, "kCal", void 0);
exports.RecipeListItemDto = RecipeListItem;
//# sourceMappingURL=recipe-list-item.dto.js.map