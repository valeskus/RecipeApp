import * as React from 'react';
import * as Redux from 'react-redux';

import { resetRecipeDetails } from '../recipeDetailsActions';

export const useResetRecipeDetails = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(() => {
    resetRecipeDetails(dispatch);
  }, [dispatch]);
};
