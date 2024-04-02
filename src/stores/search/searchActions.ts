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
  SET_PENDING_OPTIONS = '@search/set_pending_options',
  RESET_PENDING_OPTIONS = '@search/reset_pending_options',
  SET_OPTIONS = '@search/set_options',
  RESET_OPTIONS = '@search/reset_options',
}

const actionSetPendingSearchOptions = (searchOptions: SearchOptionsModel) => ({
  type: SearchActions.SET_PENDING_OPTIONS,
  payload: searchOptions,
});

export const actionSetSearchOptions = () => ({
  type: SearchActions.SET_OPTIONS,
});

const actionResetOptions = () => ({
  type: SearchActions.RESET_OPTIONS,
});

export const actionResetPendingSearchOptions = () => ({
  type: SearchActions.RESET_PENDING_OPTIONS,
});

export const setSearchOptions = (searchOptions: SearchOptionsModel, dispatch: Dispatch) => {
  dispatch(actionSetPendingSearchOptions(searchOptions));
};

export const resetSearchOptions = (dispatch: Dispatch) => {
  dispatch(actionResetOptions());
};
