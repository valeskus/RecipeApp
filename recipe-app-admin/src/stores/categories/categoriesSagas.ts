import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as CategoriesApi from '../../api/categories.api';
import { CategoriesListModel, CategoryPostModel } from '../types';

import { getCategoriesSuccessAction, getCategoriesErrorAction,
  getCategories, postCategory, postCategorySuccessAction, postCategoryErrorAction } from './categoriesSlice';

export function* getCategoriesSaga() {
  try {
    const response: AxiosResponse<CategoriesListModel> = yield CategoriesApi.getCategories();
    yield put(getCategoriesSuccessAction(response.data));
  } catch (error) {
    yield put(getCategoriesErrorAction(error as AxiosError));
  }
}

export function* watchGetCategories() {
  yield takeLatest(getCategories.type, getCategoriesSaga);
}

export function* postCategorySaga({ payload: category }: PayloadAction<CategoryPostModel>) {
  try {
    const response: AxiosResponse<string> = yield CategoriesApi.postCategory(category);
    yield put(postCategorySuccessAction(response.statusText));
  } catch (error) {
    yield put(postCategoryErrorAction(error as AxiosError));
  }
}

export function* watchPostCategory() {
  yield takeLatest(postCategory.type, postCategorySaga);
}
