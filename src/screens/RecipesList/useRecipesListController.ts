import React, {useCallback, useEffect} from 'react';
import {SearchOptions} from '../../api/recipes.api';
import * as RecipesStore from '../../stores/recipes';
import * as SearchStore from '../../stores/search';
import {useGridTypes} from './hooks';

export const useRecipeListController = () => {
  const {gridType, onChangeCardType} = useGridTypes();

  const {recipes} = RecipesStore.useRecipesStore();
  const {searchTerm} = SearchStore.useSearchStore();

  const [isLoading, setLoading] = React.useState(false);

  const getRecipes = RecipesStore.useGetRecipeList();

  const isRecipesListEmpty = recipes.length === 0;

  const handleSearch = useCallback(async () => {
    setLoading(true);
    const options: SearchOptions = {
      searchTerm,
    };
    await getRecipes(options);
    setLoading(false);
  }, [getRecipes, searchTerm]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
