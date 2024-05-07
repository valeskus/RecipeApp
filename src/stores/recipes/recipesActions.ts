import { Dispatch } from 'redux';

import { actionResetPendingSearchOptions, actionResolvePendingOptions } from '@stores/search/searchActions';

import * as RecipesApi from '@api/recipes.api';

import { PersistentStorageManager } from '@managers/PersistentStorageManager';

import { RecipeListModel } from '../../models';

export enum RecipesActions {
  GET = '@recipes/get',
  FILTER_UPDATE = '@recipes/update',
  RESET = '@recipes/reset',
  SET_CARD_TYPE = '@recipes/set_card_type',
  INIT_CARD_TYPE = '@recipes/init_card_type',
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

const actionSetCardType = (cardType: 'grid' | 'linear') => ({
  type: RecipesActions.SET_CARD_TYPE,
  payload: {
    cardType,
  },
});

const actionInitCardType = (cardType: 'grid' | 'linear') => ({
  type: RecipesActions.SET_CARD_TYPE,
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
    dispatch(actionResolvePendingOptions());
  } catch (error) {
    dispatch(actionResetPendingSearchOptions());
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
    dispatch(actionResolvePendingOptions());
  } catch (error) {
    dispatch(actionResetPendingSearchOptions());
    dispatch(actionError('getRecipes', error));
  }

  dispatch(actionRecipesFetching(false));
};

export const initCardType = async (
  dispatch: Dispatch,
) => {
  try {
    const cardType = await PersistentStorageManager.get('recipeCardType') || 'grid';
    dispatch(actionInitCardType(cardType as 'grid' | 'linear'));
  } catch (error) {
    dispatch(actionError('initCardType', error));
  }
};

export const setCardType = async (
  cardType: 'grid' | 'linear',
  dispatch: Dispatch,
) => {
  try {
    await PersistentStorageManager.set('recipeCardType', cardType);
    dispatch(actionSetCardType(cardType));
  } catch (error) {
    dispatch(actionError('setCardType', error));
  }
};

export const resetRecipes = (
  dispatch: Dispatch,
) => {
  dispatch(actionResetRecipes());
};
