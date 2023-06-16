import * as Redux from 'redux';

import { ErrorsActions } from './errorsActions';

export interface ErrorsStoreState {
  getCategories: unknown;
  getRecipes: unknown;
  getRecipeDetails: unknown;
}

const initialState: ErrorsStoreState = {
  getCategories: undefined,
  getRecipes: undefined,
  getRecipeDetails: undefined,
};

export function errorsReducer(
  state = initialState,
  action: Redux.AnyAction,
) {
  switch (action.type) {
    case ErrorsActions.SET: {
      const error = action.payload;

      return {
        ...state,
        ...error,
      };
    }

    case ErrorsActions.RESET: {

      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}
