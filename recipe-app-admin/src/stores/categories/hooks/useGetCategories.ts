import * as React from 'react';
import { Dispatch } from 'redux';

import { getCategories } from '../categoriesSlice';

export const useGetCategories = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(getCategories());
  }, []);
};
