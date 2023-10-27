import { useEffect } from 'react';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { useGridTypes } from './hooks';

export const useRecipeListController = () => {
  const { gridType, onChangeCardType } = useGridTypes();

  const { recipes, isRecipesFetching } = RecipesStore.useRecipesStore();

  const getRecipes = RecipesStore.useGetRecipeList();

  const resetRecipes = RecipesStore.useResetRecipeList();

  const searchOptions = SearchStore.useSearchStore();

  const resetSearchOptions = SearchStore.useResetSearchOptions();

  const isRecipesListEmpty = recipes.length === 0;

  useEffect(() => {
    getRecipes(searchOptions);
  }, [searchOptions.sort, searchOptions.searchTerm]);

  useEffect(() => {
    if (!recipes.length) {
      return;
    }

    resetRecipes();

    getRecipes(searchOptions);
  }, [searchOptions.filter]);

  useEffect(() => {
    if (!searchOptions.offset) {
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
    isLoading: isRecipesFetching,
    isRecipesListEmpty,
    recipes,
    onChangeCardType,
    resetRecipes,
  };
};
