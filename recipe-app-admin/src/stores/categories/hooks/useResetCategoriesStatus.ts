import * as React from 'react';
import { Dispatch } from 'redux';

import { resetCategoryStateAction } from '../categoriesSlice';

export const useResetCategoriesStatus = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetCategoryStateAction());
  }, []);
};
