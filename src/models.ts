export interface CategoryModel {
  id: string;
  title: string;
  image: string;
}

export interface MacroNutrientsModel {
  protein: number;
  carbs: number;
  fats: number;
}

export interface IngredientModel {
  name: string;
  count: string;
  unit: string;
}

export interface InstructionModel {
  image?: string;
  description: string;
}

export interface BaseReipeModel {
  id: string;
  title: string;
  kcal: number;
  time: string;
  rating: number;
  image: string;
}

export interface DetailRecipeModel extends BaseReipeModel {
  description: string;
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
  recipes: Array<BaseReipeModel>;
  filters: Array<FilterModel>;
  sortOptions: Array<SortOptionModel>;
}

export interface CategoryListModel {
  categories: Array<CategoryModel>;
}
