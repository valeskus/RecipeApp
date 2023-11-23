import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { CATEGORIES, CategoriesListModel, CategoriesStateType } from '../types';

const categoriesInitialState: CategoriesStateType = {
  categories: [],
  error: '',
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: CATEGORIES,
  initialState: categoriesInitialState,
  reducers: {
    getCategories: (state: CategoriesStateType) => {
      state.isLoading = true;
      state.error = '';
    },
    getCategoriesSuccessAction: (state: CategoriesStateType,
      { payload: categories }: PayloadAction<CategoriesListModel>) => {
      state.isLoading = false;

      state.categories = categories.categories;

    },
    getCategoriesErrorAction: (state: CategoriesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error.message;
    },

  },
});

export const { getCategories, getCategoriesErrorAction, getCategoriesSuccessAction } = categoriesSlice.actions;
