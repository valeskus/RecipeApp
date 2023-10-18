import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as ImagesApi from '../../api/images.api';

import { postImage, postImageErrorAction, postImageSuccessAction } from './AddImageSlice';

export function* postImageSaga({ payload: image }: PayloadAction<FormData>) {
  try {
    const response: AxiosResponse<{ url: string }> = yield ImagesApi.postImage(image);
    yield put(postImageSuccessAction({ image: response.data, status: response.statusText }));
  } catch (error) {
    yield put(postImageErrorAction(error as AxiosError<unknown, any>));
  }
}

export function* watchPostImage() {
  yield takeLatest(postImage.type, postImageSaga);
}
