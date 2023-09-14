export type CategoryModel = {
  id: string;
  title: string;
  image: string;
};

export type CategoryPostModel = {
  title: string;
  translations: {
    ua: {
      title: string;
    };
  };
  image: string;
  type: 'diet' | 'meal';
};

export type  CategoriesListModel = {
  categories: Array<CategoryModel>;
};

export type CategoriesModelState = {
  data: Array<CategoryModel> | null;
  error: unknown | string;
  isLoading: boolean;
};

export type CategoryCreateState = {
  status: string;
  error: any;
  isLoading: boolean;
};

export type CategoriesStateType = {
  categories: CategoriesModelState;
  create: CategoryCreateState;
};

export const CATEGORIES = 'categories';
