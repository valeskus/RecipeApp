import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useProductsStore = () => {
  return Redux.useSelector((state: RootStore) => state.products);
};
