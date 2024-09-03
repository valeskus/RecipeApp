import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RECIPES, RecipePostModel, RecipeStateType } from '../types';

const recipeInitialState: RecipeStateType = {
  status: '',
  error: '',
  isLoading: false,
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
    postRecipeErrorAction: (state: RecipeStateType, { payload: error }: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.error = error;
    },
    resetRecipeStatus: (state: RecipeStateType) => {
      state.status = '';
      state.error = '';
    },

  },
});

export const { postRecipe, postRecipeSuccessAction, postRecipeErrorAction, resetRecipeStatus,
} = recipesSlice.actions;
