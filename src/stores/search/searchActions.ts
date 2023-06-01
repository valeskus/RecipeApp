import {Dispatch} from 'redux';

export enum SearchActions {
  SET = '@search/set',
}

const actionSetSearchTerm = (searchTerm: string) => ({
  type: SearchActions.SET,
  payload: {searchTerm},
});

export const setSearchTerm = (searchTerm: string, dispatch: Dispatch) => {
  dispatch(actionSetSearchTerm(searchTerm));
};
