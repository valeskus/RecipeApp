import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// import { CategoryListModel, CategoryModel } from '../../models';

import { CATEGORIES, CategoriesListModel, CategoriesStateType } from './types';

const categoriesInitialState: CategoriesStateType = {
  categories: {
    data: null,
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

  },
});

export const { getCategories, getCategoriesErrorAction, getCategoriesSuccessAction } = categoriesSlice.actions;
