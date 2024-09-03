import * as React from 'react';
import { Dispatch } from 'redux';

import { getProducts } from '../productsSlice';

export const useGetProducts = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(getProducts());
  }, []);
};
