import * as Redux from 'redux';

import { SearchActions, SearchOptionsModel } from './searchActions';

interface Options {
  sort: string;
  filter: Array<{
    key: string;
    value: string;
  }>;
  offset: number;
}

export interface SearchState {
  searchTerm: string;
  pendingOptions: Options;
  options: Options;
}

const initialState: SearchState = {
  searchTerm: '',
  pendingOptions: {
    sort: 'relevance',
    filter: [],
    offset: 0,
  },
  options: {
    sort: 'relevance',
    filter: [],
    offset: 0,
  },

};

export function searchReducer(state = initialState, action: Redux.AnyAction): SearchState {

  switch (action.type) {
    case SearchActions.SET_PENDING_OPTIONS: {
      const { searchTerm, sort, filter, offset } = action.payload as SearchOptionsModel;

      return {
        ...state,
        searchTerm: searchTerm || state.searchTerm,
        pendingOptions: {
          filter: filter || state.pendingOptions.filter,
          sort: sort || state.pendingOptions.sort,
          offset: offset ?? state.pendingOptions.offset,
        },
      };
    }

    case SearchActions.SET_OPTIONS: {
      const { searchTerm, sort, filter, offset } = state.pendingOptions as SearchOptionsModel;

      return {
        ...state,
        searchTerm: searchTerm || state.searchTerm,
        options: {
          filter: filter || state.options.filter,
          sort: sort || state.options.sort,
          offset: offset ?? state.options.offset,
        },
      };
    }

    case SearchActions.RESET_OPTIONS: {
      return initialState;
    }

    case SearchActions.RESET_PENDING_OPTIONS: {
      return {
        ...state,
        pendingOptions: initialState.pendingOptions,
      };
    }

    default:
      return state;
  }
}
