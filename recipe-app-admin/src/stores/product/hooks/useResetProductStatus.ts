import * as React from 'react';
import { Dispatch } from 'redux';

import { resetProductStatus } from '../productsSlice';

export const useResetProductStatus = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetProductStatus());
  }, []);
};
