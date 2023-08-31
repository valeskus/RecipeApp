import { Dispatch } from 'redux';

import { PAGE_SIZE } from '@api/recipes.api';

import { SearchOptionsModel } from './searchReducer';

export interface PaginateOptions {
  arrayLength: number;
  total: number;
  offset: number;
}

export enum SearchActions {
  SET_OPTIONS = '@search/set_options',
  RESET_OPTIONS = '@search/reset_options',
  PAGINATE = '@search/paginate',
}

const actionSetSearchOptions = (searchOptions: SearchOptionsModel) => ({
  type: SearchActions.SET_OPTIONS,
  payload: searchOptions,
});

const actionResetSearchOptions = () => ({
  type: SearchActions.RESET_OPTIONS,
});

const actionPaginate = (searchOptions: SearchOptionsModel) => ({
  type: SearchActions.PAGINATE,
  payload: searchOptions,
});

export const setSearchOptions = (searchOptions: SearchOptionsModel, dispatch: Dispatch) => {
  dispatch(actionSetSearchOptions(searchOptions));
};

export const resetSearchOptions = (dispatch: Dispatch) => {
  dispatch(actionResetSearchOptions());
};

export const paginate = (options: PaginateOptions, dispatch: Dispatch) => {

  if (options.arrayLength === options.total) {
    return;
  }

  dispatch(actionPaginate({ offset: options.offset + PAGE_SIZE }));
};
