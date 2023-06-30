import * as Redux from 'redux';

import { SearchActions } from './searchActions';

export interface SearchState {
  search: string;
  sort: string;
}

const initialState: SearchState = {
  search: '',
  sort: 'relevance',
};

export function searchReducer(state = initialState, action: Redux.AnyAction) {

  switch (action.type) {
    case SearchActions.SET: {
      const { search, sort } = action.payload;

      return {
        search,
        sort: sort || state.sort,
      };
    }

    default:
      return state;
  }
}
