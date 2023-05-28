export interface BaseRecipeModel {
  id: string;
  title: string;
  kcal: number;
  time: string;
  rating: number;
  image: string;
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
