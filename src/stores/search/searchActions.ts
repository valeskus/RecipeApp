import { Dispatch } from 'redux';

import { SearchOptions } from 'src/models';

export enum SearchActions {
  SET = '@search/set',
}

const actionSetSearch = (searchOptions: SearchOptions) => ({
  type: SearchActions.SET,
  payload: searchOptions,
});

export const setSearch = (searchOptions: SearchOptions, dispatch: Dispatch) => {
  dispatch(actionSetSearch(searchOptions));
};
