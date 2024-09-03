import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useCreateCategoryStore = () => {
  return Redux.useSelector((state: RootStore) => state.createCategory);
};
