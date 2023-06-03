import * as Redux from 'redux';

import { SearchActions } from './searchActions';

export interface SearchTermState {
  searchTerm: string;
}

const initialState: SearchTermState = {
  searchTerm: '',
};

export function searchReducer(state = initialState, action: Redux.AnyAction) {
  switch (action.type) {
    case SearchActions.SET: {
      const { searchTerm } = action.payload;

      return {
        searchTerm,
      };
    }

    default:
      return state;
  }
}
