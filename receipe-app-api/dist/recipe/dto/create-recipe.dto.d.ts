import { IngredientDto } from './ingredient.dto';
import { InstructionDto } from './instruction.dto';
declare class CreateRecipe {
    readonly title: string;
    readonly time: number;
    readonly image: string;
    readonly amount: number;
    readonly units: 'ml' | 'g';
    readonly description: string;
    readonly servingsCount: number;
    readonly categories: Array<string>;
    readonly ingredients: Array<IngredientDto>;
    readonly instructions: Array<InstructionDto>;
    readonly difficulty: 0 | 1 | 2;
}
export { CreateRecipe as CreateRecipeDto };
