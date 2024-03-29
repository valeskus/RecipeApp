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
  amountPerServing: number;
}

export interface InstructionModel {
  image?: string;
  description: string;
}

export interface BaseRecipeModel {
  id: string;
  title: string;
  kCal: number;
  kCalPer100: number;
  amount: number;
  units: 'ml' | 'g';
  time: number;
  image: string;
}

export interface DetailRecipeModel extends Omit<BaseRecipeModel, 'units' >{
  description: string;
  servingsCount: number;
  amount: number;
  macroNutrients: MacroNutrientsModel;
  ingredients: Array<IngredientModel>;
  instructions: Array<InstructionModel>;
}

export interface SortOptionModel {
  value: string;
  title: string;
  isActive: boolean;
}

interface FilterValue {
  title: string;
  multiple: boolean;
  items: Array<FilterItemValueModel>;
}

export interface FilterModel {
  [filterName: string]: FilterValue;
}

export interface FilterItemValueModel {
  value: string;
  title: string;
  count: number;
  isActive: boolean;
}

export interface RecipeListModel {
  recipes: Array<BaseRecipeModel>;
  filters: FilterModel;
  sortOptions: Array<SortOptionModel>;
  total: number;
}
