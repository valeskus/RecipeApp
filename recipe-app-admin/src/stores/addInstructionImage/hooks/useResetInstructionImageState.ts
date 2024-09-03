import * as React from 'react';
import { Dispatch } from 'redux';

import { resetAddInstructionImageState } from '../AddInstructionImageSlice';

export const useResetInstructionImageState = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetAddInstructionImageState());
  }, []);
};
