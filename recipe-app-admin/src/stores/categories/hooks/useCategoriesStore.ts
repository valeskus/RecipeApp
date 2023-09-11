import * as Redux from 'react-redux';

import { RootStore } from '../../rootStore';

export const useCategoriesStore = () => {
  return Redux.useSelector((state: RootStore) => state.categories);
};
