import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

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
    getProductsErrorAction: (state: ProductsStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.products.isLoading = false;
      state.products.error = error.response?.data;
    },

    postProducts: (state: ProductsStateType, {}: PayloadAction<ProductPostModel>) => {
      state.create.isLoading = true;
      state.create.error = '';
    },
    postProductsSuccessAction: (state: ProductsStateType, { payload: status }: PayloadAction<string>) => {
      state.create.isLoading = false;
      state.create.status = status;
    },
    postProductsyErrorAction: (state: ProductsStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.create.isLoading = false;
      state.create.error = error.response?.data;
    },

  },
});

export const { getProducts, getProductsSuccessAction, getProductsErrorAction,
  postProducts, postProductsSuccessAction, postProductsyErrorAction } = productsSlice.actions;
