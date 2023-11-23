import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { CATEGORIES, CategoryPostModel, CreateCategoriesStateType } from '../types';

const categoriesInitialState: CreateCategoriesStateType = {
  status: '',
  error: '',
  isLoading: false,
};

export const createCategorySlice = createSlice({
  name: CATEGORIES,
  initialState: categoriesInitialState,
  reducers: {
    postCategory: (state: CreateCategoriesStateType, {}: PayloadAction<CategoryPostModel>) => {
      state.isLoading = true;
      state.error = '';
    },
    postCategorySuccessAction: (state: CreateCategoriesStateType, { payload: status }: PayloadAction<number>) => {
      state.isLoading = false;
      state.status = status;
    },
    postCategoryErrorAction: (state: CreateCategoriesStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error;
    },

    resetCategoryStateAction: (state: CreateCategoriesStateType) => {
      state.status = '';
      state.error = '';
    },

  },
});

export const { postCategory, postCategorySuccessAction, postCategoryErrorAction,
  resetCategoryStateAction } = createCategorySlice.actions;
