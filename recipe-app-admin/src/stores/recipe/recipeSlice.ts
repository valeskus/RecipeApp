import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RECIPES, RecipePostModel, RecipeStateType } from './types';

const recipeInitialState: RecipeStateType = {
  create: {
    status: '',
    error: '',
    isLoading: false,
  },
};

export const recipesSlice = createSlice({
  name: RECIPES,
  initialState: recipeInitialState,
  reducers: {
    postRecipe: (state: RecipeStateType, {}: PayloadAction<RecipePostModel>) => {
      state.create.isLoading = true;
      state.create.error = '';
    },
    postRecipeSuccessAction: (state: RecipeStateType, { payload: status }: PayloadAction<string>) => {
      state.create.isLoading = false;
      state.create.status = status;
    },
    postRecipeErrorAction: (state: RecipeStateType, { payload: error }: PayloadAction<unknown>) => {
      state.create.isLoading = false;
      state.create.error = error;
    },

  },
});

export const { postRecipe, postRecipeSuccessAction, postRecipeErrorAction } = recipesSlice.actions;
