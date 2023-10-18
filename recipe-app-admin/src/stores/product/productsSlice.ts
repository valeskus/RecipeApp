import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { PRODUCTS, ProductsListModel, ProductsStateType } from '../types';

const productsInitialState: ProductsStateType = {
  products: [],
  error: '',
  isLoading: false,

};

export const productsSlice = createSlice({
  name: PRODUCTS,
  initialState: productsInitialState,
  reducers: {
    getProducts: (state: ProductsStateType) => {
      state.isLoading = true;
      state.error = '';
    },
    getProductsSuccessAction: (state: ProductsStateType,
      { payload: products }: PayloadAction<ProductsListModel>) => {
      state.isLoading = false;

      state.products = products.products;

    },
    getProductsErrorAction: (state: ProductsStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error.message;
    },

  },
});

export const { getProducts, getProductsSuccessAction, getProductsErrorAction } = productsSlice.actions;
