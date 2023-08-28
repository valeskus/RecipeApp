import React, { useCallback, useEffect } from 'react';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { useGridTypes } from './hooks';

export const useRecipeListController = () => {
  const { gridType, onChangeCardType } = useGridTypes();

  const { recipes, total } = RecipesStore.useRecipesStore();

  const searchOptions = SearchStore.useSearchStore();

  const [isLoading, setLoading] = React.useState(false);

  const getRecipes = RecipesStore.useGetRecipeList();

  const isRecipesListEmpty = recipes.length === 0;

  const handleSearch = useCallback(async () => {
    setLoading(true);
    await getRecipes(searchOptions);
    setLoading(false);
  }, [searchOptions]);

  const handleOffset = useCallback(async () => {
    await getRecipes(searchOptions);
  }, [searchOptions]);

  useEffect(() => {
    handleOffset();
  }, [searchOptions.offset, searchOptions.sort]);

  return {
    gridType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    onChangeCardType,
    handleSearch,
    total,
  };
};
