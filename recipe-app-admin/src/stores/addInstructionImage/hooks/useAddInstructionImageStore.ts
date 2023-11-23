import * as Redux from 'react-redux';

import { RootStore } from '../../index';

export const useAddInstructionImageStore = () => {
  return Redux.useSelector((state: RootStore) => state.addInstructionImage);
};
