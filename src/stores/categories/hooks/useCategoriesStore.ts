import * as Redux from 'react-redux';

import { CategoryStoreState } from '../categoriesReducer';
import { RootStore } from '../../rootStore';

export const useCategoriesStore = () => {
  return Redux.useSelector<RootStore, CategoryStoreState>(
    store => store.categories,
  );
};
