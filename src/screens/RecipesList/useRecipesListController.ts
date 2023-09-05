import { useCallback, useEffect } from 'react';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { useGridTypes } from './hooks';

export const useRecipeListController = () => {
  const { gridType, onChangeCardType } = useGridTypes();

  const { recipes, total } = RecipesStore.useRecipesStore();

  const getRecipes = RecipesStore.useGetRecipeList();

  const resetRecipes = RecipesStore.useResetRecipeList();

  const searchOptions = SearchStore.useSearchStore();

  const resetSearchOptions = SearchStore.useResetSearchOptions();

  const isRecipesListEmpty = recipes.length === 0;

  const handleUpdateRecipeList = useCallback(async () => {
    await getRecipes(searchOptions);
  }, [getRecipes, searchOptions]);

  useEffect(() => {
    handleUpdateRecipeList();
  }, [searchOptions.sort, searchOptions.offset, searchOptions.searchTerm]);

  useEffect(() => {
    return () => {
      resetSearchOptions();
      resetRecipes();
    };
  }, []);

  return {
    gridType,
    isLoading: false,
    isRecipesListEmpty,
    recipes,
    total,
    onChangeCardType,
    resetRecipes,
  };
};
