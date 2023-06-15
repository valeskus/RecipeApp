import * as React from 'react';
import * as Redux from 'react-redux';

import { ressetErrors } from '../errorsActions';

export const useRessetErrors = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    () => {
      ressetErrors(dispatch);
    },
    [dispatch],
  );
};
