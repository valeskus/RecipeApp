export interface CategoryModel {
  id: string;
  title: string;
  image: string;
}
export interface CategoryListModel {
  categories: Array<CategoryModel>;
}

export interface MacroNutrientsModel {
  protein: number;
  carbs: number;
  fats: number;
}

export interface IngredientModel {
  id: string;
  title: string;
  description: string;
  count: number;
  unit: string;
}

export interface InstructionModel {
  id: 'string';
  image?: string;
  description: string;
}

export interface BaseRecipeModel {
  id: string;
  title: string;
  kcal: number;
  time: string;
  rating: number;
  image: string;
}

export interface DetailRecipeModel extends BaseRecipeModel {
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
  recipes: Array<BaseRecipeModel>;
  filters: Array<FilterModel>;
  sortOptions: Array<SortOptionModel>;
}
