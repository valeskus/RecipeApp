"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const ImageMock = 'https://picsum.photos/500/500';
let CategoriesService = class CategoriesService {
    async getCategories() {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return {
            categories: [
                { id: '1', title: 'Category 1', image: ImageMock },
                { id: '2', title: 'Category 2', image: ImageMock },
                { id: '3', title: 'Category 3', image: ImageMock },
                { id: '4', title: 'Category 4', image: ImageMock },
                { id: '5', title: 'Category 5', image: ImageMock },
                { id: '6', title: 'Category 6', image: ImageMock },
            ],
        };
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map