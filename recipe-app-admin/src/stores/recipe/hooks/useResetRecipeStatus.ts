import * as React from 'react';
import { Dispatch } from 'redux';

import { resetRecipeStatus } from '../recipeSlice';

export const useResetRecipeStatus = () => {

  return React.useCallback((dispatch: Dispatch) => {
    dispatch(resetRecipeStatus());
  }, []);
};
