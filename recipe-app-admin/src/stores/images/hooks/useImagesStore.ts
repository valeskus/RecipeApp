import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useImagesStore = () => {
  return Redux.useSelector((state: RootStore) => state.images);
};
