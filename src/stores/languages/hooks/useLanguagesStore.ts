import * as Redux from 'react-redux';

import { RootStore } from '../../rootStore';
import { LanguagesStoreState } from '../languagesReducer';

export const useLanguagesStore = () => {
  return Redux.useSelector<RootStore, LanguagesStoreState>(
    store => store.languages,
  );
};
