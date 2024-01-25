import { AxiosError, AxiosResponse } from 'axios';
import { put,  takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import * as recipesApi from '../../api/recipes.api';
import { RecipeSearchListModel } from '../types';

import { getRecipesSuccessAction, getRecipesErrorAction,
  getRecipes } from './recipesSearchSlice';

export function* getRecipesSaga({ payload: search }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<RecipeSearchListModel> = yield recipesApi.getRecipes(search);
    yield put(getRecipesSuccessAction(response.data));
  } catch (error) {
    yield put(getRecipesErrorAction(error as AxiosError));
  }
}

export function* watchGetRecipes() {
  yield takeLatest(getRecipes.type, getRecipesSaga);
}
