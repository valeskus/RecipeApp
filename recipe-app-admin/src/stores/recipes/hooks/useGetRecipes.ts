import * as React from 'react';
import { Dispatch } from 'redux';

import { getRecipes } from '../recipesSearchSlice';

export const useGetRecipes = () => {

  return React.useCallback((search: string, dispatch: Dispatch) => {
    dispatch(getRecipes(search));
  }, []);
};
