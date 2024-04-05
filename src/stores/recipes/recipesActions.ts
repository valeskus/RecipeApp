import { Dispatch } from 'redux';

import * as RecipesApi from '@api/recipes.api';

import { RecipeListModel } from '../../models';

export enum RecipesActions {
  GET = '@recipes/get',
  FILTER_UPDATE = '@recipes/update',
  RESET = '@recipes/reset',
  SET_CARD_TYPE = '@recipes/set_card_type',
  RECIPIES_FETCHING = '@recipes/recipes_fetching',
  ERROR = '@error/recipes',
}

const actionGetRecipes = (payload: RecipeListModel) => ({
  type: RecipesActions.GET,
  payload,
});

const actionFilterUpdate = (payload: RecipeListModel) => ({
  type: RecipesActions.FILTER_UPDATE,
  payload,
});

const actionSetCardType = (cardType:  'grid' | 'linear') => ({
  type: RecipesActions.GET,
  payload: {
    cardType,
  },
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

export const filterUpdate = async (
  options: RecipesApi.SearchOptions,
  dispatch: Dispatch,
) => {
  dispatch(actionRecipesFetching(true));

  try {
    const recipeList = await RecipesApi.searchRecipes(options);
    dispatch(actionFilterUpdate(recipeList));
  } catch (error) {
    dispatch(actionError('getRecipes', error));
  }

  dispatch(actionRecipesFetching(false));
};

export const setCardType = (
  cardType:  'grid' | 'linear',
  dispatch: Dispatch,
) => {
  try {
    dispatch(actionSetCardType(cardType));
  } catch (error){
    dispatch(actionError('setCardType', error));
  }
};

export const resetRecipes = (
  dispatch: Dispatch,
) => {
  dispatch(actionResetRecipes());
};
