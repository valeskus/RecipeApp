import * as Redux from 'redux';
import {DetailRecipeModel} from '../../models';
import {RecipeDetailsActions} from './recipeDetailsActions';

export interface recipeDetailsStoreState {
  recipe: DetailRecipeModel;
}

const initialState: recipeDetailsStoreState = {
  recipe: {
    id: '',
    title: '',
    kcal: 0,
    time: '',
    rating: 0,
    image: '',
    description: '',
    macroNutrients: {protein: 0, carbs: 0, fats: 0},
    ingredients: [],
    instructions: [],
  },
};

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
