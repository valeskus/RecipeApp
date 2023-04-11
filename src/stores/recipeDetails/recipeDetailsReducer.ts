import * as Redux from 'redux';
import {DetailRecipeModel} from '../../models';
import {RecipeDetailsActions} from './recipeDetailsActions';

export interface recipeDetailsStoreState {
  recipe?: DetailRecipeModel;
}

const initialState: recipeDetailsStoreState = {};

export function recipeDetailsReducer(
  state = initialState,
  action: Redux.AnyAction,
) {
  switch (action.type) {
    case RecipeDetailsActions.GET: {
      const {
        id,
        title,
        kcal,
        time,
        rating,
        image,
        description,
        macroNutrients,
        ingredients,
        instructions,
      } = action.payload as DetailRecipeModel;

      return {
        ...state,
        id,
        title,
        kcal,
        time,
        rating,
        image,
        description,
        macroNutrients,
        ingredients,
        instructions,
      };
    }
    default:
      return state;
  }
}
