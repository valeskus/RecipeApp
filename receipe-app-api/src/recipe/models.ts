export interface MacroNutrientsModel {
  protein: number;
  carbs: number;
  fats: number;
}

export interface IngredientModel {
  id: string;
  title: string;
  description?: string;
  count: number;
  unit: string;
}

export interface InstructionModel {
  id: string;
  image?: string;
  description: string;
}
export interface DetailRecipeModel {
  id: string;
  title: string;
  kcal: number;
  time: string;
  rating: number;
  image: string;
  description: string;
  servingsCount: number;
  weight: number;
  macroNutrients: MacroNutrientsModel;
  ingredients: Array<IngredientModel>;
  instructions: Array<InstructionModel>;
}
