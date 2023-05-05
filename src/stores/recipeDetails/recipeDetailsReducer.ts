import * as Redux from 'redux';
import {DetailRecipeModel} from '../../models';
import {RecipeDetailsActions} from './recipeDetailsActions';

export interface RecipeDetailsStoreState {
  recipe?: DetailRecipeModel;
}

const initialState: RecipeDetailsStoreState = {};

export function recipeDetailsReducer(
  state = initialState,
  action: Redux.AnyAction,
): RecipeDetailsStoreState {
  switch (action.type) {
    // TODO: clear receipe details action
    // return initialState
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
        recipe: {
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
        },
      };
    }
    default:
      return state;
  }
}
