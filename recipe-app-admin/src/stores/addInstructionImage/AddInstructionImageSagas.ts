import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as ImagesApi from '../../api/images.api';

import { postInstructionImage, postInstructionImageSuccessAction, postInstructionImageErrorAction,
} from './AddInstructionImageSlice';

export function* postInstructionImageSaga({ payload: image }: PayloadAction<FormData>) {
  try {
    const response: AxiosResponse<{ url: string }> = yield ImagesApi.postImage(image);
    yield put(postInstructionImageSuccessAction({ image: response.data, status: response.statusText }));
  } catch (error) {
    yield put(postInstructionImageErrorAction(error as AxiosError<unknown, any>));
  }
}

export function* watchPostInstructionImage() {
  yield takeLatest(postInstructionImage.type, postInstructionImageSaga);
}
