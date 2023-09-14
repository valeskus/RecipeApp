import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useRecipesStore = () => {
  return Redux.useSelector((state: RootStore) => state.recipes);
};
