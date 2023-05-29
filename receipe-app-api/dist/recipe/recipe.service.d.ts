import { DetailRecipeModel } from './models';
export declare class RecipeService {
    getRecipeById(id: string): Promise<DetailRecipeModel>;
}
