import * as Redux from 'redux';

import { SearchActions } from './searchActions';

export const PAGE_SIZE = 8;

export interface SearchOptionsModel {
  searchTerm?: string;
  sort?: string;
  filter?: Array<{
    key: string;
    value: string;
  }>;
  offset?: number;
  pageSize?: number;
}
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
  pageSize: PAGE_SIZE,
};

export function searchReducer(state = initialState, action: Redux.AnyAction) {

  switch (action.type) {
    case SearchActions.SET_OPTIONS: {
      const { searchTerm, sort, filter, offset } = action.payload as SearchOptionsModel;

      return {
        searchTerm: searchTerm || state.searchTerm,
        filter: filter || state.filter,
        sort: sort || state.sort,
        offset: offset || state.offset,
        pageSize: state.pageSize,
      };
    }

    case SearchActions.RESET_OPTIONS: {
      return initialState;
    }

    default:
      return state;
  }
}
