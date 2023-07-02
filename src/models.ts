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
  description?: string;
  count: number;
  unit: string;
}

export interface InstructionModel {
  id: string;
  image?: string;
  description: string;
}

export interface BaseRecipeModel {
  id: string;
  title: string;
  kCal: number;
  time: string;
  image: string;
}

export interface DetailRecipeModel extends BaseRecipeModel {
  description: string;
  servingsCount: number;
  weight: number;
  macroNutrients: MacroNutrientsModel;
  ingredients: Array<IngredientModel>;
  instructions: Array<InstructionModel>;
}

export interface SortOptionModel {
  value: string;
  isActive: boolean;
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

export interface SearchOptions {
  searchTerm: string;
  sort?: string;
  filter?: Array<{
    key: string;
    value: string;
  }>;
}
