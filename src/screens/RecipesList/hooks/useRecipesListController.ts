import React, {useCallback, useEffect} from 'react';
import {SeachOptions} from '../../../api/recipes.api';
import * as RecipesStore from '../../../stores/recipes';
import * as SearchStore from '../../../stores/search';

export const useRecipeListController = () => {
  const [gridType, setGridType] = React.useState(true);

  const {recipes} = RecipesStore.useRecipesStore();
  const {searchTerm} = SearchStore.useSearchStore();

  const [isLoading, setLoading] = React.useState(false);

  const onChangeCardType = useCallback((type: boolean) => {
    return setGridType(type);
  }, []);

  const getRecipes = RecipesStore.useGetRecipeList();

  const isRecipesListEmpty = recipes.length === 0;

  const handleSearch = useCallback(async () => {
    setLoading(true);
    const options: SeachOptions = {
      search: searchTerm,
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
