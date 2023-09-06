import * as Redux from 'redux';

import { SearchActions, SearchOptionsModel } from './searchActions';

export interface SearchState {
  searchTerm: string;
  sort: string;
  filter: Array<{
    key: string;
    value: string;
  }>;
  offset: number;
}

const initialState: SearchState = {
  searchTerm: '',
  sort: 'relevance',
  filter: [],
  offset: 0,
};

export function searchReducer(state = initialState, action: Redux.AnyAction) {

  switch (action.type) {
    case SearchActions.SET_OPTIONS: {
      const { searchTerm, sort, filter, offset } = action.payload as SearchOptionsModel;

      return {
        ...state,
        searchTerm: searchTerm || state.searchTerm,
        filter: filter || state.filter,
        sort: sort || state.sort,
        offset: offset ?? state.offset,
      };
    }

    case SearchActions.RESET_OPTIONS: {
      return initialState;
    }

    default:
      return state;
  }
}
