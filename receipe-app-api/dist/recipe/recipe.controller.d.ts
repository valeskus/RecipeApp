import { RecipeService } from './recipe.service';
import { DetailRecipeModel } from './models';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    getHello(id: string): Promise<DetailRecipeModel>;
}
