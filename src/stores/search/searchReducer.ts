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
  offset: number;
  pageSize: number;
}

const initialState: SearchState = {
  searchTerm: '',
  sort: 'relevance',
  filter: [],
  offset: 0,
  pageSize: 8,
};

export function searchReducer(state = initialState, action: Redux.AnyAction) {

  switch (action.type) {
    case SearchActions.SET_OPTIONS: {
      const { searchTerm, sort, filter, offset, pageSize } = action.payload as SearchOptions;
      const search = (searchTerm || searchTerm === '') ? searchTerm : state.searchTerm;

      return {
        searchTerm: search,
        filter: filter || state.filter,
        sort: sort || state.sort,
        offset: offset || state.offset,
        pageSize: pageSize || state.pageSize,
      };
    }

    default:
      return state;
  }
}
