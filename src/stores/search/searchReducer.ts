import * as Redux from 'redux';

import { SearchActions, SearchOptionsModel } from './searchActions';

interface Options {
  sort: string;
  filter: Array<{
    key: string;
    value: string;
  }>;
}

export interface SearchState {
  searchTerm: string;
  offset: number;
  pendingOptions?: Partial<Options>;
  options: Options;
}

const initialState: SearchState = {
  searchTerm: '',
  offset: 0,
  options: {
    sort: 'relevance',
    filter: [],
  },

};

export function searchReducer(state = initialState, action: Redux.AnyAction): SearchState {

  switch (action.type) {
    case SearchActions.SET_PENDING_OPTIONS: {
      const { searchTerm, sort, filter, offset } = action.payload as SearchOptionsModel;

      return {
        ...state,
        searchTerm: searchTerm || state.searchTerm,
        offset: offset ?? state.offset,
        pendingOptions: {
          filter: filter || state.pendingOptions?.filter,
          sort: sort || state.pendingOptions?.sort,
        },
      };
    }

    case SearchActions.SET_OPTIONS: {
      const { searchTerm, offset, pendingOptions } = state;

      return {
        ...state,
        searchTerm: searchTerm || state.searchTerm,
        offset: offset ?? state.offset,
        pendingOptions: undefined,
        options: {
          filter: pendingOptions?.filter || state.options.filter,
          sort: pendingOptions?.sort || state.options.sort,
        },
      };
    }

    case SearchActions.RESET_OPTIONS: {
      return initialState;
    }

    default:
      return state;
  }
}
