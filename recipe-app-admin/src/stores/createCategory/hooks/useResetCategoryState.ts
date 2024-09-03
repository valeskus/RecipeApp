import * as React from 'react';
import { Dispatch } from 'redux';

import { resetCategoryStateAction } from '../createCategorySlice';

export const useResetCategoryState = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetCategoryStateAction());
  }, []);
};
