import * as React from 'react';
import * as Redux from 'react-redux';

import { SearchOptions } from '@api/recipes.api';

import { filterUpdate } from '../recipesActions';

export const useFilterUpdate = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (options: Omit<SearchOptions, 'pageSize'>) => {
      await filterUpdate(options, dispatch);
    },
    [dispatch],
  );
};
