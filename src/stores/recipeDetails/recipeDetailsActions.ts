import { Dispatch } from 'redux';

import * as RecipesApi from '@api/recipes.api';

import { DetailRecipeModel } from '../../models';

export enum RecipeDetailsActions {
  GET = '@recipe/get',
  RESET = '@recipe/reset',
  ERROR = '@error/recipe',
}

const actionGetRecipe = (payload: DetailRecipeModel) => ({
  type: RecipeDetailsActions.GET,
  payload,
});

const actionResetRecipe = () => ({
  type: RecipeDetailsActions.RESET,
});

const actionError = (error: unknown, key: string) => ({
  type: RecipeDetailsActions.ERROR,
  payload: { [key]: error },
});

export const getRecipeDetails = async (id: string, dispatch: Dispatch) => {
  try {
    const recipe = await RecipesApi.getRecipeById(id);

    dispatch(actionGetRecipe(recipe));
  } catch (error) {
    dispatch(actionError(error, 'getRecipeDetails'));
  }
};

export const resetRecipeDetails = (dispatch: Dispatch) => {
  dispatch(actionResetRecipe());
};
