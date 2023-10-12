import * as React from 'react';
import { Dispatch } from 'redux';

import { resetImageStatus } from '../imagesSlice';

export const useResetImageStatus = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetImageStatus());
  }, []);
};
