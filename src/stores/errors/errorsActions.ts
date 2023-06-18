import { Dispatch } from 'redux';

export enum ErrorsActions {
  RESET = '@error/reset',
  SET = '@error/set',
}

const actionSetError = (error: unknown) => ({
  type: ErrorsActions.SET,
  payload: error,
});
const actionResetError = (errorKey: string) => ({
  type: ErrorsActions.RESET,
  payload: errorKey,
});

export const setError =  (
  error: unknown,
  dispatch: Dispatch,
) => {
  dispatch(actionSetError(error));
};

export const resetErrors =  (
  dispatch: Dispatch, errorKey: string,
) => {
  dispatch(actionResetError(errorKey));
};
