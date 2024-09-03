import * as React from 'react';
import * as Redux from 'react-redux';

import { setOffset } from '../searchActions';

export const useSetOffset = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    (offset: number) => {
      setOffset(offset, dispatch);
    },
    [dispatch],
  );
};
