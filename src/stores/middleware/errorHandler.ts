import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';

import { setError } from '../errors/errorsActions';

export const errorHandler: Middleware = <S>(api: MiddlewareAPI) => (
  next: Dispatch,
) => (action: any) => {
  try {
    next(action);

    if (action.type.includes('error')) {
      setError(action.payload, next);
    }

  } catch (err) {
    setError(err, next);
  }

};
