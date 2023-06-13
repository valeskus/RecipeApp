import { Dispatch } from 'redux';

export enum ErrorsActions {
  RESSET = '@error/resset',
  SET = '@set/error',
}

const actionError = (error: unknown) => ({
  type: ErrorsActions.SET,
  payload: error,
});
const actionRessetError = () => ({
  type: ErrorsActions.RESSET,
});

export const setError =  (
  error: unknown,
  dispatch: Dispatch,
) => {
  dispatch(actionError(error));
};

export const ressetErrors =  (
  dispatch: Dispatch,
) => {
  dispatch(actionRessetError());
};
