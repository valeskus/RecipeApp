import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';

import * as ProductsApi from '../../api/products.api';
import { ProductsListModel } from '../types';

import { getProductsSuccessAction, getProducts, getProductsErrorAction } from './productsSlice';

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
