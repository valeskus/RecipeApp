import * as React from 'react';
import * as Redux from 'react-redux';

import { getRecipes } from '../recipesActions';

import { SearchOptions } from 'src/models';

export const useGetRecipeList = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (options: SearchOptions) => {
      await getRecipes(options, dispatch);
    },
    [dispatch],
  );
};
