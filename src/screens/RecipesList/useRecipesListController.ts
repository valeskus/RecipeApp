import { useCallback, useEffect, useMemo, useState } from 'react';

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

  const searchRecipeOptions = useMemo(() => {
    return { searchTerm: searchOptions.searchTerm, offset: searchOptions.offset, ...searchOptions.pendingOptions };
  }, [searchOptions.searchTerm, searchOptions.pendingOptions, searchOptions.offset]);

  const onSearch = useCallback(() => {
    resetRecipes();
    setLoading(true);
  }, [resetRecipes]);

  useEffect(() => {
    setLoading(true);

    Promise.all([getRecipes(searchRecipeOptions), getCardType()])
      .then(() => setLoading(false));
  }, [searchOptions.searchTerm]);

  useEffect(() => {
    if (!searchOptions.pendingOptions?.sort) {
      return;
    }

    setLoading(true);

    getRecipes(searchRecipeOptions).then(() => setLoading(false));
  }, [searchOptions.pendingOptions?.sort]);

  useEffect(() => {
    if (!recipes.length || !searchOptions.pendingOptions?.filter) {
      return;
    }

    updateFilter(searchRecipeOptions);
  }, [searchOptions.pendingOptions?.filter]);

  useEffect(() => {
    if (!searchOptions.offset) {
      return;
    }

    getRecipes(searchRecipeOptions);
  }, [searchOptions.offset]);

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
    activeSort: searchOptions.options.sort || undefined,
    setCardType,
    onSearch,
  };
};
