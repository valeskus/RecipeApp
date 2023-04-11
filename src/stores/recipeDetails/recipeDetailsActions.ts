import {Dispatch} from 'redux';
import * as RecipesApi from '../../api/recipes.api';
import {DetailRecipeModel} from '../../models';

export enum RecipeDetailsActions {
  GET = '@recipe/get',
  ERROR = '@error/recipes',
}

const actionGetRecipe = (payload: DetailRecipeModel) => ({
  type: RecipeDetailsActions.GET,
  payload,
});

const actionError = (error: unknown) => ({
  type: RecipeDetailsActions.ERROR,
  payload: error,
});

export const getRecipeDetails = async (dispatch: Dispatch, id: string) => {
  try {
    const recipe = await RecipesApi.getRecipeById(id);

    dispatch(actionGetRecipe(recipe));
  } catch (error) {
    dispatch(actionError(error));
  }
};
