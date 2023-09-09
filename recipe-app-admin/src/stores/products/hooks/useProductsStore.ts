import * as Redux from 'react-redux';

import { ProductsStoreState } from '../productsReducer';
import { RootStore } from '../../rootStore';

export const useCategoriesStore = () => {
  return Redux.useSelector<RootStore, ProductsStoreState>(
    store => store.products,
  );
};