import * as React from 'react';
import { Dispatch } from 'redux';

import { resetCategoryStateAction } from '../createCategorySlice';

export const useResetCategoriesState = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetCategoryStateAction());
  }, []);
};
