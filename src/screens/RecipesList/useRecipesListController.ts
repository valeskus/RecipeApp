import { useCallback, useEffect, useState } from 'react';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { EventService } from '@services/EventService';

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

    Promise.all([getRecipes({ searchTerm: searchOptions.searchTerm, ...searchOptions.pendingOptions }), getCardType()])
      .then(() => setLoading(false));
  }, [searchOptions.pendingOptions.sort, searchOptions.searchTerm]);

  useEffect(() => {
    if (!recipes.length) {
      return;
    }

    updateFilter({ searchTerm: searchOptions.searchTerm, ...searchOptions.pendingOptions });
  }, [searchOptions.pendingOptions.filter]);

  useEffect(() => {
    if (!searchOptions.pendingOptions.offset) {
      return;
    }

    getRecipes({ searchTerm: searchOptions.searchTerm, ...searchOptions.pendingOptions });

  }, [searchOptions.pendingOptions.offset]);

  useEffect(() => {
    return () => {
      resetSearchOptions();
      resetRecipes();
    };
  }, []);

  useEffect(() => {
    EventService.emit('view:recipes-list');
  }, []);

  return {
    recipeCardType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    total,
    isFilterActive: searchOptions.options.filter.length !== 0,
    activeSort: searchOptions.options.sort,
    setCardType,
    onSearch,
  };
};
