import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as RecipesApi from '../../api/recipes.api';
import { RecipePostModel } from '../types';

import { postRecipe, postRecipeSuccessAction, postRecipeErrorAction } from './recipeSlice';

export function* postRecipeSaga({ payload: recipe }: PayloadAction<RecipePostModel>) {
  try {
    const response: AxiosResponse<string> = yield RecipesApi.postRecipe(recipe);
    yield put(postRecipeSuccessAction(response.status));
  } catch (error) {
    yield put(postRecipeErrorAction(error as AxiosError));
  }
}

export function* watchPostRecipe() {
  yield takeLatest(postRecipe.type, postRecipeSaga);
}
