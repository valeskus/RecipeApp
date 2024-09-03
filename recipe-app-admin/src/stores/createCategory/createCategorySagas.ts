import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as CategoriesApi from '../../api/categories.api';
import { CategoryPostModel } from '../types';

import { postCategory, postCategorySuccessAction, postCategoryErrorAction } from './createCategorySlice';

export function* postCategorySaga({ payload: category }: PayloadAction<CategoryPostModel>) {
  try {
    const response: AxiosResponse<string> = yield CategoriesApi.postCategory(category);
    yield put(postCategorySuccessAction(response.status));
  } catch (error) {
    yield put(postCategoryErrorAction(error as AxiosError));
  }
}

export function* watchPostCategory() {
  yield takeLatest(postCategory.type, postCategorySaga);
}
