import * as React from 'react';
import { Dispatch } from 'redux';

import { resetAddImageState } from '../AddImageSlice';

export const useResetAddImageState = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetAddImageState());
  }, []);
};
