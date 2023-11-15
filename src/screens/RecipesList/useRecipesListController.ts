import { useEffect, useState } from 'react';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { useGridTypes } from './hooks';

export const useRecipeListController = () => {
  const { gridType, onChangeCardType } = useGridTypes();
  const [isLoading, setLoading] = useState(false);

  const { recipes, total } = RecipesStore.useRecipesStore();

  const getRecipes = RecipesStore.useGetRecipeList();
  const updateFilter = RecipesStore.useFilterUpdate();

  const resetRecipes = RecipesStore.useResetRecipeList();

  const searchOptions = SearchStore.useSearchStore();

  const resetSearchOptions = SearchStore.useResetSearchOptions();

  const isRecipesListEmpty = recipes.length === 0;

  useEffect(() => {
    setLoading(true);
    getRecipes(searchOptions).then(() => setLoading(false));
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
    gridType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    total,
    onChangeCardType,
    resetRecipes,
  };
};
