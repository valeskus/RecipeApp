import * as React from 'react';
import * as Redux from 'react-redux';

import { getProducts } from '../productsAction';

export const useGetCategories = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(async () => {
    await getProducts(dispatch);
  }, [dispatch]);
};