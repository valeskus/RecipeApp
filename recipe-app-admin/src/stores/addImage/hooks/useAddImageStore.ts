import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useAddImageStore = () => {
  return Redux.useSelector((state: RootStore) => state.addImage);
};
