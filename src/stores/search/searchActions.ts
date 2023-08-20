import { Dispatch } from 'redux';

import { SearchOptionsModel } from '../../models';

export enum SearchActions {
  SET_OPTIONS = '@search/set_options',
}

const actionSetSearchOptions = (searchOptions: SearchOptionsModel) => ({
  type: SearchActions.SET_OPTIONS,
  payload: searchOptions,
});

export const setSearchOptions = (searchOptions: SearchOptionsModel, dispatch: Dispatch) => {
  dispatch(actionSetSearchOptions(searchOptions));
};
