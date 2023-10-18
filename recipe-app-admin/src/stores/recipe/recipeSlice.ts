import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { RECIPES, RecipePostModel, RecipeStateType } from './types';

const recipeInitialState: RecipeStateType = {
  status: '',
  error: '',
  isLoading: false,

  recipeImage: {
    status: '',
    error: '',
    isLoading: false,
    url: '',
  },
  instructionImage: {
    status: '',
    error: '',
    isLoading: false,
    url: '',
  },
};

export const recipesSlice = createSlice({
  name: RECIPES,
  initialState: recipeInitialState,
  reducers: {
    postRecipe: (state: RecipeStateType, {}: PayloadAction<RecipePostModel>) => {
      state.isLoading = true;
      state.error = '';
    },
    postRecipeSuccessAction: (state: RecipeStateType, { payload: status }: PayloadAction<number>) => {
      state.isLoading = false;
      state.status = status;
    },
    postRecipeErrorAction: (state: RecipeStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error.message;
    },
    postRecipeImage: (state: RecipeStateType, {}: PayloadAction<FormData>) => {
      state.recipeImage.isLoading = true;
      state.error = '';
    },
    postRecipeImageSuccessAction: (state: RecipeStateType, { payload }: PayloadAction<{
      image: { url: string }; status: string; }>) => {
      state.recipeImage.isLoading = false;
      state.recipeImage.url = payload.image.url;
    },
    postRecipeImageErrorAction: (state: RecipeStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.recipeImage.isLoading = false;
      state.error = error.message;
    },
    postInstructionImage: (state: RecipeStateType, {}: PayloadAction<FormData>) => {
      state.instructionImage.isLoading = true;
      state.instructionImage.error = '';
    },
    postInstructionImageSuccessAction: (state: RecipeStateType, { payload }: PayloadAction<{
      image: { url: string }; status: string; }>) => {
      state.instructionImage.isLoading = false;
      state.instructionImage.url = payload.image.url;
    },
    postInstructionImageErrorAction: (state: RecipeStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.instructionImage.isLoading = false;
      state.instructionImage.error = error.response?.data;
    },
    resetRecipeStatus: (state: RecipeStateType) => {
      state.status = '';
      state.error = '';
    },

  },
});

export const { postRecipe, postRecipeSuccessAction, postRecipeErrorAction, resetRecipeStatus,
  postRecipeImage, postRecipeImageSuccessAction, postRecipeImageErrorAction,
  postInstructionImage, postInstructionImageSuccessAction, postInstructionImageErrorAction } = recipesSlice.actions;
