import * as Redux from 'redux';

import { SearchActions } from './searchActions';

export interface SearchState {
  searchTerm: string;
  sort: string;
}

const initialState: SearchState = {
  searchTerm: '',
  sort: 'relevance',
};

export function searchReducer(state = initialState, action: Redux.AnyAction) {

  switch (action.type) {
    case SearchActions.SET: {
      const { searchTerm, sort } = action.payload;

      return {
        searchTerm,
        sort: sort || state.sort,
      };
    }

    default:
      return state;
  }
}
