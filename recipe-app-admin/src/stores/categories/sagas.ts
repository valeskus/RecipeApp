import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// import { getCategories } from '../../api/categories.api';
import { CategoryListModel } from '../../models';
import { client } from '../../api/client.api';

import { CATEGORIES, CategoriesListModel } from './types';
import { getCategoriesSuccessAction, getCategoriesErrorAction } from './categoriesSlice';

// Generator function
export function* getCategoriesSaga() {
  console.log(3);

  try {
    // You can also export the axios call as a function.
    console.log(1);
    const response: AxiosResponse<CategoriesListModel> = yield client.get<CategoryListModel>('/categories');
    yield put(getCategoriesSuccessAction(response.data));
  } catch (error) {
    yield put(getCategoriesErrorAction(error));
  }
}

// Generator function
export function* watchGetCategories() {
  console.log(2);
  console.log(CATEGORIES);
  //not working pattern!!! TODO
  yield takeLatest(CATEGORIES, getCategoriesSaga);
}
