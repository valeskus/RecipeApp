import * as React from 'react';
import * as Redux from 'react-redux';

import { resetErrors } from '../errorsActions';

export const useResetErrors = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    () => {
      resetErrors(dispatch);
    },
    [dispatch],
  );
};
