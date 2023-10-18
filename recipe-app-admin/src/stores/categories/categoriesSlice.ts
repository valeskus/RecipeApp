import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { CATEGORIES, CategoriesListModel, CategoriesStateType, CategoryPostModel } from '../types';

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
    getCategoriesErrorAction: (state: CategoriesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.categories.isLoading = false;
      state.categories.error = error.response?.data;
    },

    postCategory: (state: CategoriesStateType, {}: PayloadAction<CategoryPostModel>) => {
      state.create.isLoading = true;
      state.create.error = '';
    },
    postCategorySuccessAction: (state: CategoriesStateType, { payload: status }: PayloadAction<string>) => {
      state.create.isLoading = false;
      state.create.status = status;
    },
    postCategoryErrorAction: (state: CategoriesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.create.isLoading = false;
      state.create.error = error.response?.data;
    },

    resetCategoryStateAction: (state: CategoriesStateType) => {
      state.create.status = '';
      state.create.error = '';
    },

  },
});

export const { getCategories, getCategoriesErrorAction, getCategoriesSuccessAction,
  postCategory, postCategorySuccessAction, postCategoryErrorAction,
  resetCategoryStateAction } = categoriesSlice.actions;
