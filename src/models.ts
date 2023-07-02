export interface CategoryModel {
  id: string;
  title: string;
  image: string;
}
export interface CategoryListModel {
  categories: Array<CategoryModel>;
}

export interface MacroNutrientsModel {
  proteins: number;
  carbs: number;
  fats: number;
}

export interface IngredientModel {
  title: string;
  amount: number;
  units: string;
}

export interface InstructionModel {
  image?: string;
  description: string;
}

export interface BaseRecipeModel {
  id: string;
  title: string;
  kCal: number;
  time: number;
  image: string;
}

export interface DetailRecipeModel extends BaseRecipeModel {
  description: string;
  servingsCount: number;
  amount: number;
  macroNutrients: MacroNutrientsModel;
  ingredients: Array<IngredientModel>;
  instructions: Array<InstructionModel>;
}

export interface SortOptionModel {
  label: string;
  id: string;
}

export interface FilterValueModel {
  label: string;
  id: string;
}

export interface FilterModel {
  id: string;
  title: string;
  values: Array<FilterValueModel>;
}

export interface RecipeListModel {
  recipes: Array<BaseRecipeModel>;
  filters: Array<FilterModel>;
  sortOptions: Array<SortOptionModel>;
}
