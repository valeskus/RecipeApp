import {Dispatch} from 'redux';

export enum SearchActions {
  SET = '@search/set',
  ERROR = '@error/recipes',
}

const actionSetSearchTerm = (searchTerm: string) => ({
  type: SearchActions.SET,
  payload: {searchTerm},
});

const actionError = (error: unknown) => ({
  type: SearchActions.ERROR,
  payload: error,
});

export const setSearchTerm = async (searchTerm: string, dispatch: Dispatch) => {
  try {
    dispatch(actionSetSearchTerm(searchTerm));
  } catch (error) {
    dispatch(actionError(error));
  }
};
