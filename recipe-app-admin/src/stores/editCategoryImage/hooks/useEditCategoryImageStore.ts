import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useEditCategoryImageStore = () => {
  return Redux.useSelector((state: RootStore) => state.editCategoryImage);
};
