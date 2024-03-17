import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as CategoriesApi from '../../api/categories.api';
import { ImageModel } from '../../models';

import { patchCategoryImage,
  patchCategoryImageSuccessAction,
  patchCategoryImageErrorAction } from './editCategoryImageSlice';

export function* patchCategoryImageSaga({ payload: image }: PayloadAction< ImageModel>) {
  try {
    const response: AxiosResponse<string> = yield CategoriesApi.patchCategoryImage(image);
    yield put(patchCategoryImageSuccessAction(response.status));
  } catch (error) {
    yield put(patchCategoryImageErrorAction(error as AxiosError));
  }
}

export function* watchEditCategoryImage() {
  yield takeLatest(patchCategoryImage.type, patchCategoryImageSaga);
}
