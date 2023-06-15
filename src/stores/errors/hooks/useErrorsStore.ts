import * as Redux from 'react-redux';

import { ErrorsStoreState } from '../errorsReducer';
import { RootStore } from '../../rootStore';

export const useErrorsStore = () => {
  return Redux.useSelector<RootStore, ErrorsStoreState>(
    store => store.errors,
  );
};
