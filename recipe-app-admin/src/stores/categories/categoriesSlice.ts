import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CATEGORIES, CategoriesListModel, CategoriesStateType, CategoryPostModel } from './types';

const categoriesInitialState: CategoriesStateType = {
  categories: {
    data: null,
    error: '',
    isLoading: false,
  },
  create: {
    status: '',
    error: '',
    isLoading: false,
  },
};

export const categoriesSlice = createSlice({
  name: CATEGORIES,
  initialState: categoriesInitialState,
  reducers: {
    getCategories: (state: CategoriesStateType) => {
      state.categories.isLoading = true;
      state.categories.error = '';
    },
    getCategoriesSuccessAction: (state: CategoriesStateType,
      { payload: categories }: PayloadAction<CategoriesListModel>) => {
      state.categories.isLoading = false;

      state.categories.data = categories.categories;

    },
    getCategoriesErrorAction: (state: CategoriesStateType, { payload: error }: PayloadAction<unknown>) => {
      state.categories.isLoading = false;
      state.categories.error = error;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postCategory: (state: CategoriesStateType, { payload: category }: PayloadAction<CategoryPostModel>) => {
      state.create.isLoading = true;
      state.create.error = '';
    },
    postCategorySuccessAction: (state: CategoriesStateType, { payload: status }: PayloadAction<string>) => {
      state.create.isLoading = false;
      state.create.status = status;
    },
    postCategoryErrorAction: (state: CategoriesStateType, { payload: error }: PayloadAction<unknown>) => {
      state.create.isLoading = false;
      state.create.error = error;
    },

  },
});

export const { getCategories, getCategoriesErrorAction, getCategoriesSuccessAction,
  postCategory, postCategorySuccessAction, postCategoryErrorAction } = categoriesSlice.actions;
