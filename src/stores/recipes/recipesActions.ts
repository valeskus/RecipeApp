import {Dispatch} from 'redux';
import * as RecipesApi from '../../api/recipes.api';
import {RecipeListModel, DetailRecipeModel} from '../../models';

export enum RecipesActions {
  GET = '@recipes/get',
  GET_BY_ID = '@recipeById/get',
  ERROR = '@error/recipes',
}

const actionGetRecipes = (payload: RecipeListModel) => ({
  type: RecipesActions.GET,
  payload,
});

const actionGetRecipeById = (payload: DetailRecipeModel) => ({
  type: RecipesActions.GET_BY_ID,
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

export const getRecipeById = async (dispatch: Dispatch, id: string) => {
  try {
    const recipe = await RecipesApi.getRecipeById(id);

    dispatch(actionGetRecipeById(recipe));
  } catch (error) {
    dispatch(actionError(error));
  }
};
