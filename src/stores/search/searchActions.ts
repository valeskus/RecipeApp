import {Dispatch} from 'redux';

export enum SearchActions {
  SET = '@search/set',
  ERROR = '@error/recipes',
}
//TODO types

const actionSetSearchTerm = (payload: {}) => ({
  type: SearchActions.SET,
  payload,
});

const actionError = (error: unknown) => ({
  type: SearchActions.ERROR,
  payload: error,
});
//TODO types
export const setSearchTerm = async (searchTerm: any, dispatch: Dispatch) => {
  try {
    dispatch(actionSetSearchTerm(searchTerm));
  } catch (error) {
    dispatch(actionError(error));
  }
};
