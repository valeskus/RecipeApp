import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { PRODUCTS, ProductPostModel, ProductsListModel, ProductsStateType } from './types';

const productsInitialState: ProductsStateType = {
  products: {
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

export const productsSlice = createSlice({
  name: PRODUCTS,
  initialState: productsInitialState,
  reducers: {
    getProducts: (state: ProductsStateType) => {
      state.products.isLoading = true;
      state.products.error = '';
    },
    getProductsSuccessAction: (state: ProductsStateType,
      { payload: products }: PayloadAction<ProductsListModel>) => {
      state.products.isLoading = false;

      state.products.data = products.products;

    },
    getProductsErrorAction: (state: ProductsStateType, { payload: error }: PayloadAction<unknown>) => {
      state.products.isLoading = false;
      state.products.error = error;
    },

    postProducts: (state: ProductsStateType, {}: PayloadAction<ProductPostModel>) => {
      state.create.isLoading = true;
      state.create.error = '';
    },
    postProductsSuccessAction: (state: ProductsStateType, { payload: status }: PayloadAction<string>) => {
      state.create.isLoading = false;
      state.create.status = status;
    },
    postProductsyErrorAction: (state: ProductsStateType, { payload: error }: PayloadAction<unknown>) => {
      state.create.isLoading = false;
      state.create.error = error;
    },

  },
});

export const { getProducts, getProductsSuccessAction, getProductsErrorAction,
  postProducts, postProductsSuccessAction, postProductsyErrorAction } = productsSlice.actions;
