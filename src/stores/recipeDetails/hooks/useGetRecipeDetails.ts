import * as React from 'react';
import * as Redux from 'react-redux';

import { getRecipeDetails } from '../recipeDetailsActions';

export const useGetRecipeDetails = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (id: string) => {
      await getRecipeDetails(id, dispatch);
    },
    [dispatch],
  );
};
