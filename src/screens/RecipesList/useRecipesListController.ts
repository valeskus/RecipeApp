import { useCallback, useEffect, useState } from 'react';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { useGridTypes } from './hooks';

export const useRecipeListController = () => {
  const { setCardType, recipeCardType, getCardType } = useGridTypes();
  const [isLoading, setLoading] = useState(false);

  const { recipes, total } = RecipesStore.useRecipesStore();

  const getRecipes = RecipesStore.useGetRecipeList();
  const updateFilter = RecipesStore.useFilterUpdate();

  const resetRecipes = RecipesStore.useResetRecipeList();

  const searchOptions = SearchStore.useSearchStore();

  const resetSearchOptions = SearchStore.useResetSearchOptions();

  const isRecipesListEmpty = recipes.length === 0;

  const onSearch = useCallback(() => {
    resetRecipes();
    setLoading(true);
  }, [resetRecipes]);

  useEffect(() => {
    setLoading(true);

    Promise.all([getRecipes(searchOptions), getCardType()])
      .then(() => setLoading(false));
  }, [searchOptions.sort, searchOptions.searchTerm]);

  useEffect(() => {
    if (!recipes.length) {
      return;
    }

    updateFilter(searchOptions);
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
    recipeCardType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    total,
    isFilterActive: searchOptions.filter.length !== 0,
    activeSort: searchOptions.sort,
    setCardType,
    onSearch,
  };
};
