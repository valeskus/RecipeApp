import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CreateProductStateType, PRODUCTS, ProductPostModel } from '../types';

const createProductInitialState: CreateProductStateType = {
  status: NaN,
  error: '',
  isLoading: false,
};

export const createProductSlice = createSlice({
  name: PRODUCTS,
  initialState: createProductInitialState,
  reducers: {
    postProducts: (state: CreateProductStateType, {}: PayloadAction<ProductPostModel>) => {
      state.isLoading = true;
      state.error = '';
    },
    postProductsSuccessAction: (state: CreateProductStateType, { payload: status }: PayloadAction<number>) => {
      state.isLoading = false;
      state.status = status;
    },
    postProductsyErrorAction: (state: CreateProductStateType, { payload: error }: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.error = error;
    },
    resetProductState: (state: CreateProductStateType) => {
      state.status = NaN;
      state.error = '';
    },

  },
});

export const { postProducts, postProductsSuccessAction,
  postProductsyErrorAction, resetProductState } = createProductSlice.actions;
