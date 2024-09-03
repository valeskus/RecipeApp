import * as React from 'react';

import * as RecipesStore from '@stores/recipes';

import { useSearchStore } from './useSearchStore';
import { useSetOffset } from './useSetOffset';

const PAGE_SIZE = 10;

export const usePagination = () => {
  const { recipes, total } = RecipesStore.useRecipesStore();
  const { offset } = useSearchStore();
  const setOffset = useSetOffset();

  return React.useCallback(
    () => {

      if (recipes.length === total) {
        return;
      }

      setOffset(offset + PAGE_SIZE);
    },
    [recipes, total, offset],
  );
};
