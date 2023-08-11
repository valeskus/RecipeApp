import * as Redux from 'redux';

import { SearchOptions } from '@api/recipes.api';

import { SearchActions } from './searchActions';

export interface SearchState {
  searchTerm: string;
  sort: string;
  filter: Array<{
    key: string;
    value: string;
  }>;
}

const initialState: SearchState = {
  searchTerm: '',
  sort: 'relevance',
  filter: [],
};

export function searchReducer(state = initialState, action: Redux.AnyAction) {

  switch (action.type) {
    case SearchActions.SET_OPTIONS: {
      const { searchTerm, sort, filter } = action.payload as SearchOptions;

      return {
        searchTerm,
        filter: filter || state.filter,
        sort: sort || state.sort,
      };
    }

    default:
      return state;
  }
}
