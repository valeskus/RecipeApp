import { Recipe } from './schemas';
import { CreateRecipeDto } from './dto';
export declare class RecipeService {
    private recipeModel;
    private readonly categoriesService;
    private readonly productsService;
    findOneByTitle(title: string): Promise<Recipe | null>;
    findOneById(id: string): Promise<Recipe | null>;
    create(createRecipeDto: CreateRecipeDto): Promise<Recipe>;
}
