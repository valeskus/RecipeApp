import React, { useCallback, useEffect } from 'react';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

// import { SearchOptions } from '@api/recipes.api';

import { useGridTypes } from './hooks';

export const useRecipeListController = () => {
  const { gridType, onChangeCardType } = useGridTypes();

  const { recipes } = RecipesStore.useRecipesStore();
  const { search, sort } = SearchStore.useSearchStore();

  const [isLoading, setLoading] = React.useState(false);

  const getRecipes = RecipesStore.useGetRecipeList();

  const isRecipesListEmpty = recipes.length === 0;

  const handleSearch = useCallback(async () => {
    setLoading(true);
    // const options: SearchOptions = {
    //   search,
    // };
    await getRecipes({ search, sort });
    setLoading(false);
  }, [getRecipes, search]);

  useEffect(() => {
    handleSearch();
  }, []);

  return {
    gridType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    onChangeCardType,
    handleSearch,
  };
};
