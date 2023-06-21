import { RecipeService } from './recipe.service';
import { Recipe } from './schemas';
import { CreateRecipeDto } from './dto';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    findOneById(id: string): Promise<Recipe>;
    create(createRecipeDto: CreateRecipeDto): Promise<Recipe>;
}
