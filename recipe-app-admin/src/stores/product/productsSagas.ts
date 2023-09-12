import { AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';

import * as ProductsApi from '../../api/products.api';

import { getProductsSuccessAction, getProducts, getProductsErrorAction } from './productsSlice';
import { ProductsListModel } from './types';

export function* getProductsSaga() {
  try {
    const response: AxiosResponse<ProductsListModel> = yield ProductsApi.getProducts();
    yield put(getProductsSuccessAction(response.data));
  } catch (error) {
    yield put(getProductsErrorAction(error));
  }
}

export function* watchGetProducts() {
  yield takeLatest(getProducts.type, getProductsSaga);
}

//TODO:  How get i arguments here?

// export function* postCategorySaga({ payload: category }: PayloadAction<CategoryPostModel>) {
//   try {
//     const response: AxiosResponse<string> = yield CategoriesApi.postCategory(category);
//     yield put(postCategorySuccessAction(response.statusText));
//   } catch (error) {
//     yield put(postCategoryErrorAction(error));
//   }
// }

// export function* watchPostCategory() {
//   yield takeLatest(postCategory.type, postCategorySaga);
// }
