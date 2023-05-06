import {Dispatch} from 'redux';
import {SearchTermModel} from '../../models';

export enum SearchActions {
  SET = '@search/set',
  ERROR = '@error/recipes',
}

const actionSetSearchTerm = (payload: SearchTermModel) => ({
  type: SearchActions.SET,
  payload,
});

const actionError = (error: unknown) => ({
  type: SearchActions.ERROR,
  payload: error,
});

export const setSearchTerm = async (
  searchTerm: SearchTermModel,
  dispatch: Dispatch,
) => {
  try {
    dispatch(actionSetSearchTerm(searchTerm));
  } catch (error) {
    dispatch(actionError(error));
  }
};
