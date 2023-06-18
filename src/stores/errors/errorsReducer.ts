import * as Redux from 'redux';

import { ErrorsActions } from './errorsActions';

export interface ErrorsStoreState {
  [errorKey: string]: unknown;
}

const initialState: ErrorsStoreState = {};

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
      const { errorKey } = action.payload;
      const filteredState = Object.fromEntries(Object.entries(state).filter(key => key[0] === errorKey));

      return {
        ...filteredState,
      };
    }

    default:
      return state;
  }
}
