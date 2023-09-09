export interface CategoryModel {
  id: string;
  title: string;
  image: string;
}
export interface CategoryListModel {
  categories: Array<CategoryModel>;
}
export interface CategoryPostModel {
  title: string,
  translations: {
      ua: {
          title: string
      }
  },
  image: string,
  type: "diet"|"meal"
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

export interface ProductModel {
  id: string;
  title: string;
  kCal: number;
  proteins: number;
  carbs: number;
  fats: number;
  units: "g" | "ml";
}

export interface ProductsListModel {
  products: Array<ProductModel>
}

export interface ProductPostModel {
  title: string;
  kCal: number;
  proteins: number;
  carbs: number;
  fats: number;
  units: "g" | "ml";
  translations: {
    ua: {
      title: string;
    }
  },
}