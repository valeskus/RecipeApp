import { Dispatch } from 'redux';
export interface SearchOptionsModel {
  sort?: string;
  filter?: Array<{
    key: string;
    value: string;
  }>;
}

export enum SearchActions {
  SET_PENDING_OPTIONS = '@search/set_pending_options',
  RESET_PENDING_OPTIONS = '@search/reset_pending_options',
  RESOLVE_PENDING_OPTIONS = '@search/resolve_pending_options',
  RESET_OPTIONS = '@search/reset_options',
  SET_OFFSET ='@search/set_offset',
  SET_SEARCH_TERM='@search/set_search_term',
}

const actionSetPendingSearchOptions = (searchOptions: SearchOptionsModel) => ({
  type: SearchActions.SET_PENDING_OPTIONS,
  payload: searchOptions,
});

export const actionResolvePendingOptions = () => ({
  type: SearchActions.RESOLVE_PENDING_OPTIONS,
});

const actionSetSearchTerm = (searchTerm: string) => ({
  type: SearchActions.SET_SEARCH_TERM,
  payload: { searchTerm },
});

const actionSetOffset = (offset: number) => ({
  type: SearchActions.SET_OFFSET,
  payload: { offset },
});

const actionResetOptions = () => ({
  type: SearchActions.RESET_OPTIONS,
});

export const setOffset = (offset: number, dispatch: Dispatch) => {
  dispatch(actionSetOffset(offset));
};

export const setSearchTerm = (searchTerm: string, dispatch: Dispatch) => {
  dispatch(actionSetSearchTerm(searchTerm));
};

export const actionResetPendingSearchOptions = () => ({
  type: SearchActions.RESET_PENDING_OPTIONS,
});

export const setPendingSearchOptions = (searchOptions: SearchOptionsModel, dispatch: Dispatch) => {

  dispatch(actionSetPendingSearchOptions(searchOptions));
};

export const resetSearchOptions = (dispatch: Dispatch) => {
  dispatch(actionResetOptions());
};
