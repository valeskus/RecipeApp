import { Dispatch } from 'redux';

import * as RecipeApi from '../../api/recipes.api';
import { RecipePostModel } from '../../models';

export enum RecipesActions {
  ERROR = '@recipes/error',
}

const actionError = (key: string, error: unknown) => ({
  type: RecipesActions.ERROR,
  payload: { [key]: error },
});

export const addRecipes = async (recipe: RecipePostModel, dispatch: Dispatch) => {
  try {
    await RecipeApi.postRecipe(recipe);
  } catch (error) {
    dispatch(actionError('addRecipes', error));
  }
};
