import * as Redux from 'redux';

import { SearchActions, SearchOptionsModel } from './searchActions';

interface Options {
  sort?: string;
  filter: Array<{
    key: string;
    value: string;
  }>;
}

export interface SearchState {
  searchTerm: string;
  offset: number;
  pendingOptions?: Options;
  options: Options;
}

const initialState: SearchState = {
  searchTerm: '',
  offset: 0,
  options: {
    filter: [],
  },

};

export function searchReducer(state = initialState, action: Redux.AnyAction): SearchState {

  switch (action.type) {
    case SearchActions.SET_PENDING_OPTIONS: {
      const { sort, filter } = action.payload as SearchOptionsModel;

      return {
        ...state,
        offset: 0,
        pendingOptions: {
          filter: filter || state.options.filter,
          sort: sort || state.options.sort,
        },
      };
    }

    case SearchActions.SET_OFFSET: {
      const { offset } = action.payload as {offset: number};

      return {
        ...state,
        offset,
      };
    }

    case SearchActions.SET_SEARCH_TERM: {
      const { searchTerm } = action.payload as {searchTerm: string};

      return {
        ...state,
        searchTerm,
      };
    }

    case SearchActions.RESOLVE_PENDING_OPTIONS: {
      const { pendingOptions } = state;

      if (!pendingOptions) {
        return state;
      }

      return {
        ...state,
        pendingOptions: undefined,
        options: pendingOptions,
      };
    }

    case SearchActions.RESET_OPTIONS: {
      return initialState;
    }

    default:
      return state;
  }
}
