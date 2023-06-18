import { Dispatch } from 'redux';

import * as RecipesApi from '@api/recipes.api';

import { RecipeListModel } from '../../models';

export enum RecipesActions {
  GET = '@recipes/get',
  ERROR = '@error/recipes',
}

const actionGetRecipes = (payload: RecipeListModel) => ({
  type: RecipesActions.GET,
  payload,
});

const actionError = (error: unknown, key: string) => ({
  type: RecipesActions.ERROR,
  payload: { [key]: error },
});

export const getRecipes = async (
  options: RecipesApi.SearchOptions,
  dispatch: Dispatch,
) => {
  try {
    const recipeList = await RecipesApi.searchRecipes(options);
    dispatch(actionGetRecipes(recipeList));
  } catch (error) {
    dispatch(actionError(error, 'getRecipes'));
  }
};
