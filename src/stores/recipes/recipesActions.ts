import { Dispatch } from 'redux';

import * as RecipesApi from '@api/recipes.api';

import { RecipeListModel, SearchOptions } from '../../models';

export enum RecipesActions {
  GET = '@recipes/get',
  ERROR = '@error/recipes',
}

const actionGetRecipes = (payload: RecipeListModel) => ({
  type: RecipesActions.GET,
  payload,
});

const actionError = (key: string, error: unknown) => ({
  type: RecipesActions.ERROR,
  payload: { [key]: error },
});

export const getRecipes = async (
  options: SearchOptions,
  dispatch: Dispatch,
) => {
  try {
    const recipeList = await RecipesApi.searchRecipes(options);
    dispatch(actionGetRecipes(recipeList));
  } catch (error) {
    dispatch(actionError('getRecipes', error));
  }
};
