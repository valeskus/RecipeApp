import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useCategoriesStore = () => {
  return Redux.useSelector((state: RootStore) => state.categories);
};
