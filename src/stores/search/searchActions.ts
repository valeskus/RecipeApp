import { Dispatch } from 'redux';
export interface SearchOptionsModel {
  searchTerm?: string;
  sort?: string;
  filter?: Array<{
    key: string;
    value: string;
  }>;
  offset?: number;
}

export enum SearchActions {
  SET_OPTIONS = '@search/set_options',
  RESET_OPTIONS = '@search/reset_options',
}

const actionSetSearchOptions = (searchOptions: SearchOptionsModel) => ({
  type: SearchActions.SET_OPTIONS,
  payload: searchOptions,
});

const actionResetSearchOptions = () => ({
  type: SearchActions.RESET_OPTIONS,
});

export const setSearchOptions = (searchOptions: SearchOptionsModel, dispatch: Dispatch) => {
  dispatch(actionSetSearchOptions(searchOptions));
};

export const resetSearchOptions = (dispatch: Dispatch) => {
  dispatch(actionResetSearchOptions());
};
