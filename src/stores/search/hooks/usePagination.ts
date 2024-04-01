import * as React from 'react';
import * as Redux from 'react-redux';

import * as RecipesStore from '@stores/recipes';

import { setSearchOptions } from '../searchActions';

import { useSearchStore } from './useSearchStore';

const PAGE_SIZE = 10;

export const usePagination = () => {
  const dispatch = Redux.useDispatch();
  const { recipes, total } = RecipesStore.useRecipesStore();
  const { pendingOptions } = useSearchStore();

  return React.useCallback(
    () => {

      if (recipes.length === total) {
        return;
      }

      setSearchOptions({ offset: (pendingOptions?.offset || 0) + PAGE_SIZE }, dispatch);
    },
    [dispatch, recipes, total, pendingOptions?.offset],
  );
};
