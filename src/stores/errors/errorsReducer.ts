import * as Redux from 'redux';
import { ErrorsActions } from './errorsActions';

export interface ErrorsStoreState { }

const initialState: ErrorsStoreState = {
  error: null
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
        error
      };
    }
    case ErrorsActions.RESSET: {

      return {
        ...initialState
      };
    }
    default:
      return state;
  }
}
