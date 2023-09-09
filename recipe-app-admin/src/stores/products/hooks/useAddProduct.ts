import * as React from 'react';
import * as Redux from 'react-redux';

import { addProduct } from '../productsAction';
import { ProductItemModel } from '../../../api/products.api';

export const useAddProduct = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(async (product: ProductItemModel) => {
    await addProduct(product, dispatch);
  }, [dispatch]);
};