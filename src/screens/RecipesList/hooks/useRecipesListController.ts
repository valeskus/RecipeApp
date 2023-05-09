import React, {useCallback, useEffect} from 'react';
import {SeachOptions} from '../../../api/recipes.api';
import * as RecipesStore from '../../../stores/recipes';
import * as SearchStore from '../../../stores/search';

export const useRecipeListController = () => {
  const [gridType, setGridType] = React.useState(true);

  const {recipes} = RecipesStore.useRecipesStore();
  const {searchTerm} = SearchStore.useSearchStore();

  const [isLoading, setLoading] = React.useState(false);

  const [sortData, setSortData] = React.useState();
  const [filterData, setFilterData] = React.useState([]);

  const onChangeCardType = useCallback((type: boolean) => {
    return setGridType(type);
  }, []);

  const getRecipes = RecipesStore.useGetRecipeList();

  const isRecipes = recipes.length > 0;

  const handleSearch = useCallback(() => {
    setLoading(true);
    const options: SeachOptions = {
      search: searchTerm,
      sort: sortData,
      filter: filterData,
    };
    getRecipes(options).then(() => {
      setLoading(false);
    });
  }, [sortData, filterData, getRecipes, searchTerm]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    gridType,
    isLoading,
    isRecipes,
    recipes,
    onChangeCardType,
    handleSearch,
  };
};
