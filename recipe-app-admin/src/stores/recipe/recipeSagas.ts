import { AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as RecipesApi from '../../api/recipes.api';

import { postRecipe, postRecipeSuccessAction, postRecipeErrorAction } from './recipeSlice';
import { RecipePostModel } from './types';

export function* postCategorySaga({ payload: recipe }: PayloadAction<RecipePostModel>) {
  try {
    const response: AxiosResponse<string> = yield RecipesApi.postRecipe(recipe);
    yield put(postRecipeSuccessAction(response.statusText));
  } catch (error) {
    yield put(postRecipeErrorAction(error));
  }
}

export function* watchPostRecipe() {
  yield takeLatest(postRecipe.type, postCategorySaga);
}
