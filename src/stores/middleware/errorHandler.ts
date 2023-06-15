import { Middleware, Dispatch } from 'redux';

import { setError } from '../errors/errorsActions';

export const errorHandler: Middleware = () => (
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
