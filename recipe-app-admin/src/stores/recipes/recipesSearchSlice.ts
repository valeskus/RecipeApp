import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { RECIPES_SEARCH, RecipeSearchListModel, RecipesSearchStateType } from '../types';

const recipesInitialState: RecipesSearchStateType = {
  recipesData: { recipes: [], total: 0 },
  error: '',
  isLoading: false,
};

export const recipesSearchSlice = createSlice({
  name: RECIPES_SEARCH,
  initialState: recipesInitialState,
  reducers: {
    getRecipes: (state: RecipesSearchStateType, {}: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = '';
    },
    getRecipesSuccessAction: (state: RecipesSearchStateType,
      { payload: recipes }: PayloadAction<RecipeSearchListModel>) => {
      state.isLoading = false;

      state.recipesData.recipes = recipes.recipes;
      state.recipesData.total = recipes.total;

    },
    getRecipesErrorAction: (state: RecipesSearchStateType, { payload: error }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = error.message;
    },

  },
});

export const { getRecipes, getRecipesErrorAction, getRecipesSuccessAction } = recipesSearchSlice.actions;
