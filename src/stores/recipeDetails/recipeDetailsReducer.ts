import * as Redux from 'redux';

import { DetailRecipeModel } from '../../models';

import { RecipeDetailsActions } from './recipeDetailsActions';

export interface RecipeDetailsStoreState {
  recipe?: DetailRecipeModel;
}

const initialState: RecipeDetailsStoreState = {};

export function recipeDetailsReducer(
  state = initialState,
  action: Redux.AnyAction,
): RecipeDetailsStoreState {
  switch (action.type) {
    case RecipeDetailsActions.GET: {
      const {
        id,
        title,
        kCal,
        kCalPer100,
        servingsCount,
        amount,
        time,
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
          kCal,
          kCalPer100,
          servingsCount,
          amount,
          time,
          image,
          description,
          macroNutrients,
          ingredients,
          instructions,
        },
      };
    }

    case RecipeDetailsActions.RESET: {
      return initialState;
    }

    default:
      return state;
  }
}
