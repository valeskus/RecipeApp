"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const ImageMock = 'https://picsum.photos/500/500';
let RecipeService = class RecipeService {
    async getRecipeById(id) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return {
            id: id,
            title: 'Product 1 ',
            image: ImageMock,
            rating: 4,
            kcal: 500,
            weight: 1300,
            time: '1:50',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Ac turpis egestas sed tempus.',
            macroNutrients: {
                protein: 20,
                carbs: 30,
                fats: 10,
            },
            servingsCount: 3,
            ingredients: [
                {
                    id: 'i1',
                    title: 'Product 1',
                    description: '(lorem ipsum dolor sit amet)',
                    count: 200,
                    unit: 'g',
                },
                {
                    id: 'i2',
                    title: 'Product 2',
                    count: 1 / 2,
                    unit: 'cup',
                },
                {
                    id: 'i3',
                    title: 'Product 3',
                    count: 50,
                    unit: 'ml',
                },
            ],
            instructions: [
                {
                    id: 'in1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. ',
                },
                {
                    id: 'in2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. ',
                },
                {
                    id: 'in3',
                    image: ImageMock,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. ',
                },
            ],
        };
    }
};
RecipeService = __decorate([
    (0, common_1.Injectable)()
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map