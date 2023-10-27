import { Dispatch } from 'redux';

import * as RecipesApi from '@api/recipes.api';

import { RecipeListModel } from '../../models';

export enum RecipesActions {
  GET = '@recipes/get',
  RESET = '@recipes/reset',
  RECIPIES_FETCHING = '@recipes/recipes-fetching',
  ERROR = '@error/recipes',
}

const actionGetRecipes = (payload: RecipeListModel) => ({
  type: RecipesActions.GET,
  payload,
});

const actionRecipesFetching = (isRecipesFetching: boolean) => ({
  type: RecipesActions.RECIPIES_FETCHING,
  payload: {
    isRecipesFetching,
  },
});

const actionResetRecipes = () => ({
  type: RecipesActions.RESET,
});

const actionError = (key: string, error: unknown) => ({
  type: RecipesActions.ERROR,
  payload: { [key]: error },
});

export const getRecipes = async (
  options: RecipesApi.SearchOptions,
  dispatch: Dispatch,
) => {
  dispatch(actionRecipesFetching(true));

  try {
    const recipeList = await RecipesApi.searchRecipes(options);
    dispatch(actionGetRecipes(recipeList));
  } catch (error) {
    dispatch(actionError('getRecipes', error));
  }

  dispatch(actionRecipesFetching(false));
};

export const resetRecipes =  (
  dispatch: Dispatch,
) => {
  dispatch(actionResetRecipes());
};
