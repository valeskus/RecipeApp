import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useCreateCategoriesStore = () => {
  return Redux.useSelector((state: RootStore) => state.createCategory);
};
