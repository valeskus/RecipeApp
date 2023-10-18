import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as ProductsApi from '../../api/products.api';
import { ProductPostModel, ProductsListModel } from '../types';

import { getProductsSuccessAction, getProducts, getProductsErrorAction,
  postProducts, postProductsSuccessAction, postProductsyErrorAction } from './productsSlice';

export function* getProductsSaga() {
  try {
    const response: AxiosResponse<ProductsListModel> = yield ProductsApi.getProducts();
    yield put(getProductsSuccessAction(response.data));
  } catch (error) {
    yield put(getProductsErrorAction(error as AxiosError<unknown, any>));
  }
}

export function* watchGetProducts() {
  yield takeLatest(getProducts.type, getProductsSaga);
}

export function* postProductSaga({ payload: product }: PayloadAction<ProductPostModel>) {
  try {
    const response: AxiosResponse<string> = yield ProductsApi.postProduct(product);
    yield put(postProductsSuccessAction(response.statusText));
  } catch (error) {
    yield put(postProductsyErrorAction(error as AxiosError<unknown, any>));
  }
}

export function* watchPostProduct() {
  yield takeLatest(postProducts.type, postProductSaga);
}
