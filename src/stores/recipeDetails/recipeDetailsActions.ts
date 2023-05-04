import {Dispatch} from 'redux';
import * as RecipesApi from '../../api/recipes.api';
import {DetailRecipeModel} from '../../models';

export enum RecipeDetailsActions {
  GET = '@recipe/get',
  ERROR = '@error/recipe',
}
//TODO remove undefined
const actionGetRecipe = (payload: DetailRecipeModel | undefined) => ({
  type: RecipeDetailsActions.GET,
  payload,
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
