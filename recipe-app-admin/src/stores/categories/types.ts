export type CategoryModel = {
  id: string;
  title: string;
  image: string;
};

export type  CategoriesListModel = {
  categories: Array<CategoryModel>;
};

export type CategoriesModelState = {
  data: Array<CategoryModel> | null;
  error: unknown | string;
  isLoading: boolean;
};

export type CategoriesStateType = {
  categories: CategoriesModelState;
  // Later, we can add other sub-states like:
  // list,
  // create,
  // update,
  // remove
};

export const CATEGORIES = 'categories';
