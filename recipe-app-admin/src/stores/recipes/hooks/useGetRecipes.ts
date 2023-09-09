import * as React from 'react';
import * as Redux from 'react-redux';

import { SearchOptions } from '@api/recipes.api';

import { getRecipes } from '../recipesActions';

export const useGetRecipeList = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (options: Omit<SearchOptions, 'pageSize'>) => {
      await getRecipes(options, dispatch);
    },
    [dispatch],
  );
};
