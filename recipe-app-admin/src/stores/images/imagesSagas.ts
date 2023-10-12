import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { ImageListModel } from '../../models';
import * as ImagesApi from '../../api/images.api';

import { getImages, getImagesErrorAction, getImagesSuccessAction,
  postImage, postImageErrorAction, postImageSuccessAction } from './imagesSlice';
import { ImagePostModel } from './types';

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

export function* postImageSaga({ payload: image }: PayloadAction<ImagePostModel>) {
  try {
    const response: AxiosResponse<string> = yield ImagesApi.postImage(image);
    yield put(postImageSuccessAction(response.statusText));
  } catch (error) {
    yield put(postImageErrorAction(error as AxiosError<unknown, any>));
  }
}

export function* watchPostImage() {
  yield takeLatest(postImage.type, postImageSaga);
}
