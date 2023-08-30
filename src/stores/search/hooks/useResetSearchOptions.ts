import * as React from 'react';
import * as Redux from 'react-redux';

import { resetSearchOptions } from '../searchActions';

export const useResetSearchOptions = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    () => {
      resetSearchOptions(dispatch);
    },
    [dispatch],
  );
};
