import * as Redux from 'react-redux';

import { RootStore } from '../../rootStore';
import { SearchState } from '../searchReducer';

export const useSearchStore = () => {
  return Redux.useSelector<RootStore, SearchState>(store => store.search);
};
