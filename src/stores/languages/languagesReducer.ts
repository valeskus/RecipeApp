import * as Redux from 'redux';

import { LanguagesActions } from './languagesActions';

export interface LanguagesStoreState {
  language: 'ua' | 'en' | '';
}

const initialState: LanguagesStoreState = {
  language: '',
};

export function languagesReducer(
  state = initialState,
  action: Redux.AnyAction,
): LanguagesStoreState {
  switch (action.type) {
    case LanguagesActions.SET: {
      const { language } = action.payload;

      return {
        ...state,
        language,
      };
    }

    default:
      return state;
  }
}
