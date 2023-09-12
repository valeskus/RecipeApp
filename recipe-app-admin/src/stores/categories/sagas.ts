import { AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';

import * as CategoriesApi from '../../api/categories.api';

import { CategoriesListModel } from './types';
import { getCategoriesSuccessAction, getCategoriesErrorAction, getCategories } from './categoriesSlice';

export function* getCategoriesSaga() {
  try {
    const response: AxiosResponse<CategoriesListModel> = yield CategoriesApi.getCategories();
    yield put(getCategoriesSuccessAction(response.data));
  } catch (error) {
    yield put(getCategoriesErrorAction(error));
  }
}

export function* watchGetCategories() {
  yield takeLatest(getCategories.type, getCategoriesSaga);
}
