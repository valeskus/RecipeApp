import React, {useCallback, useEffect} from 'react';
import {SeachOptions} from '../../../api/recipes.api';
import * as RecipesStore from '../../../stores/recipes';
import * as SearchStore from '../../../stores/search';

export const useRecipeListController = () => {
  const [gridType, setGridType] = React.useState(true);

  const {recipes} = RecipesStore.useRecipesStore();
  const {searchTerm} = SearchStore.useSearchStore();

  const [isLoading, setLoading] = React.useState(false);

  const [searchData, setSearchData] = React.useState(searchTerm);
  const [sortData, setSortData] = React.useState();
  const [filterData, setFilterData] = React.useState([]);

  const onChangeCardType = useCallback((type: boolean) => {
    return setGridType(type);
  }, []);

  const getRecipes = RecipesStore.useGetRecipeList();
  const setSearchTerm = SearchStore.useSearchTerm();

  useEffect(() => {
    setLoading(true);

    const options: SeachOptions = {
      search: searchData,
      sort: sortData,
      filter: filterData,
    };
    getRecipes(options).then(() => {
      setLoading(false);
    });
  }, [sortData, filterData, getRecipes, searchData]);

  const handleSearch = useCallback(
    (search: string) => {
      setSearchTerm({searchTerm: search}).then(() => {
        setSearchData(search);
      });
      const options: SeachOptions = {
        search: search,
        sort: sortData,
        filter: filterData,
      };
      getRecipes(options).then(() => {
        setLoading(false);
      });
    },
    [sortData, filterData, getRecipes, setSearchTerm],
  );

  return {
    gridType,
    isLoading,
    recipes,
    onChangeCardType,
    searchData,
    handleSearch,
  };
};
