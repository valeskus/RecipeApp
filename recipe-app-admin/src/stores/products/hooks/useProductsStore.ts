import * as Redux from 'react-redux';

import { ProductsStoreState } from '../productsReducer';
import { RootStore } from '../../rootStore';

export const useProductsStore = () => {
  return Redux.useSelector<RootStore, ProductsStoreState>(
    store => store.products,
  );
};