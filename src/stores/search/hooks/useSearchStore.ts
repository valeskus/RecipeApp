import * as Redux from 'react-redux';
import {RootStore} from '../../rootStore';
import {SearchTermState} from '../searchReducer';

export const useSearchStore = () => {
  return Redux.useSelector<RootStore, SearchTermState>(store => store.search);
};
