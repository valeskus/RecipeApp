import { AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as ProductsApi from '../../api/products.api';
import { ProductPostModel } from '../types';

import { postProducts, postProductsSuccessAction, postProductsyErrorAction } from './createProductSlice';

export function* postProductSaga({ payload: product }: PayloadAction<ProductPostModel>) {
  try {
    const response: AxiosResponse<string> = yield ProductsApi.postProduct(product);
    yield put(postProductsSuccessAction(response.status));
  } catch (error) {
    yield put(postProductsyErrorAction(error));
  }
}

export function* watchPostProduct() {
  yield takeLatest(postProducts.type, postProductSaga);
}
