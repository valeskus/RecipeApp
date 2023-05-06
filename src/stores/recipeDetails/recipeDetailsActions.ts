import {Dispatch} from 'redux';
import * as RecipesApi from '../../api/recipes.api';
import {DetailRecipeModel} from '../../models';

export enum RecipeDetailsActions {
  GET = '@recipe/get',
  RESET = '@recipe/reset',
  ERROR = '@error/recipe',
}
//TODO remove undefined
const actionGetRecipe = (payload: DetailRecipeModel | undefined) => ({
  type: RecipeDetailsActions.GET,
  payload,
});
const actionResetRecipe = () => ({
  type: RecipeDetailsActions.RESET,
});

const actionError = (error: unknown) => ({
  type: RecipeDetailsActions.ERROR,
  payload: error,
});

export const getRecipeDetails = async (id: string, dispatch: Dispatch) => {
  try {
    const recipe = await RecipesApi.getRecipeById(id);
    dispatch(actionGetRecipe(recipe));
  } catch (error) {
    dispatch(actionError(error));
  }
};
export const resetRecipeDetails = async (dispatch: Dispatch) => {
  try {
    dispatch(actionResetRecipe());
  } catch (error) {
    dispatch(actionError(error));
  }
};
