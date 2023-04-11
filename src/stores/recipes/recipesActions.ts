import {Dispatch} from 'redux';
import * as RecipesApi from '../../api/recipes.api';
import {RecipeListModel} from '../../models';

export enum RecipesActions {
  GET = '@recipes/get',
  ERROR = '@error/recipes',
}

const actionGetRecipes = (payload: RecipeListModel) => ({
  type: RecipesActions.GET,
  payload,
});

const actionError = (error: unknown) => ({
  type: RecipesActions.ERROR,
  payload: error,
});

export const getRecipes = async (
  dispatch: Dispatch,
  options: RecipesApi.SeachOptions,
  //???
) => {
  try {
    const recipeList = await RecipesApi.searchRecipes(options);

    dispatch(actionGetRecipes(recipeList));
  } catch (error) {
    dispatch(actionError(error));
  }
};
