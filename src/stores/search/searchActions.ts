import { Dispatch } from 'redux';

import { SearchOptions } from '@api/recipes.api';

export enum SearchActions {
  SET_OPTIONS = '@search/set_options',
}

const actionSetSearchOptions = (searchOptions: SearchOptions) => ({
  type: SearchActions.SET_OPTIONS,
  payload: searchOptions,
});

export const setSearchOptions = (searchOptions: SearchOptions, dispatch: Dispatch) => {
  dispatch(actionSetSearchOptions(searchOptions));
};
