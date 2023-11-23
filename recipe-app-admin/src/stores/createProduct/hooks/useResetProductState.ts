import * as React from 'react';
import { Dispatch } from 'redux';

import { resetProductState } from '../createProductSlice';

export const useResetProductState = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetProductState());
  }, []);
};
