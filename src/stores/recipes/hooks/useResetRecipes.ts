import * as React from 'react';
import * as Redux from 'react-redux';

import { resetRecipes } from '../recipesActions';

export const useResetRecipeList = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    () => {
      resetRecipes(dispatch);
    },
    [dispatch],
  );
};
