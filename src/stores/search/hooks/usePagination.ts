import * as React from 'react';
import * as Redux from 'react-redux';

import * as RecipesStore from '@stores/recipes';

import { setSearchOptions } from '../searchActions';

export const PAGE_SIZE = 10;

export const usePagination = () => {
  const dispatch = Redux.useDispatch();
  const { recipes, total } = RecipesStore.useRecipesStore();

  return React.useCallback(
    (offsetValue: number) => {

      if (recipes.length === total) {
        return;
      }

      const offset = offsetValue + PAGE_SIZE;

      setSearchOptions({ offset }, dispatch);
    },
    [dispatch],
  );
};
