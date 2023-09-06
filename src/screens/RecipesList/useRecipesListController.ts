import { useCallback, useEffect, useState } from 'react';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { useGridTypes } from './hooks';

export const useRecipeListController = () => {
  const { gridType, onChangeCardType } = useGridTypes();
  const [isLoading, setLoading] = useState(false);

  const { recipes } = RecipesStore.useRecipesStore();

  const getRecipes = RecipesStore.useGetRecipeList();

  const resetRecipes = RecipesStore.useResetRecipeList();

  const searchOptions = SearchStore.useSearchStore();

  const resetSearchOptions = SearchStore.useResetSearchOptions();

  const isRecipesListEmpty = recipes.length === 0;

  const updateRecipesList = useCallback(async () => {
    setLoading(true);
    await getRecipes(searchOptions);
    setLoading(false);

  }, [isLoading, searchOptions]);

  useEffect(() => {
    updateRecipesList();
  }, [searchOptions.sort, searchOptions.searchTerm]);

  useEffect(() => {
    if (searchOptions.offset === 0) {
      return;
    }

    getRecipes(searchOptions);
  }, [searchOptions.offset]);

  useEffect(() => {
    return () => {
      resetSearchOptions();
      resetRecipes();
    };
  }, []);

  return {
    gridType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    onChangeCardType,
    resetRecipes,
  };
};
