import * as React from 'react';
import * as Redux from 'react-redux';

import { addProduct } from '../productsAction';
import { ProductModel } from '../../../models';

export const useAddProduct = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(async (product :ProductModel) => {
    await addProduct(product,dispatch);
  }, [dispatch]);
};