import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as RecipesApi from '../../api/recipes.api';
import * as ImagesApi from '../../api/images.api';

import { postRecipe, postRecipeSuccessAction, postRecipeErrorAction,
  postRecipeImage, postRecipeImageSuccessAction, postRecipeImageErrorAction,
  postInstructionImage,
  postInstructionImageSuccessAction,
  postInstructionImageErrorAction } from './recipeSlice';
import { RecipePostModel } from './types';

export function* postRecipeSaga({ payload: recipe }: PayloadAction<RecipePostModel>) {
  try {
    const response: AxiosResponse<string> = yield RecipesApi.postRecipe(recipe);
    yield put(postRecipeSuccessAction(response.status));
  } catch (error) {
    yield put(postRecipeErrorAction(error as AxiosError));
  }
}

export function* postRecipeImageSaga({ payload: image }: PayloadAction<FormData>) {
  try {
    const response: AxiosResponse<{ url: string }> = yield ImagesApi.postImage(image);
    yield put(postRecipeImageSuccessAction({ image: response.data, status: response.statusText }));
  } catch (error) {
    yield put(postRecipeImageErrorAction(error as AxiosError<unknown, any>));
  }
}

export function* postInstructionImageSaga({ payload: image }: PayloadAction<FormData>) {
  try {
    const response: AxiosResponse<{ url: string }> = yield ImagesApi.postImage(image);
    yield put(postInstructionImageSuccessAction({ image: response.data, status: response.statusText }));
  } catch (error) {
    yield put(postInstructionImageErrorAction(error as AxiosError<unknown, any>));
  }
}

export function* watchPostRecipe() {
  yield takeLatest(postRecipe.type, postRecipeSaga);
}

export function* watchPostRecipeImage() {
  yield takeLatest(postRecipeImage.type, postRecipeImageSaga);
}

export function* watchPostInstructionImage() {
  yield takeLatest(postInstructionImage.type, postInstructionImageSaga);
}
