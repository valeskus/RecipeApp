import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';

import { ImageListModel } from '../../models';
import * as ImagesApi from '../../api/images.api';

import { getImages, getImagesErrorAction, getImagesSuccessAction } from './imagesSlice';

export function* getImagesSaga() {
  try {
    const response: AxiosResponse<ImageListModel> = yield ImagesApi.getImages();
    yield put(getImagesSuccessAction(response.data));
  } catch (error) {
    yield put(getImagesErrorAction(error as AxiosError<unknown, any>));
  }
}

export function* watchGetImages() {
  yield takeLatest(getImages.type, getImagesSaga);
}
