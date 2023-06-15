import { Dispatch } from 'redux';

export enum ErrorsActions {
  RESSET = '@error/reset',
  SET = '@set/error',
}

const actionError = (error: unknown) => ({
  type: ErrorsActions.SET,
  payload: error,
});
const actionResetError = () => ({
  type: ErrorsActions.RESSET,
});

export const setError =  (
  error: unknown,
  dispatch: Dispatch,
) => {
  dispatch(actionError(error));
};

export const resetErrors =  (
  dispatch: Dispatch,
) => {
  dispatch(actionResetError());
};
