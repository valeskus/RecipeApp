import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useCreateProductStore = () => {
  return Redux.useSelector((state: RootStore) => state.createProduct);
};
