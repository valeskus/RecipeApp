import React, {useCallback, useEffect} from 'react';
import {SeachOptions} from '../../../api/recipes.api';
import * as RecipesStore from '../../../stores/recipes';
import {RouteProp, useRoute} from '@react-navigation/native';

export const useRecipeListController = () => {
  const [gridType, setGridType] = React.useState(true);

  const {recipes} = RecipesStore.useRecipesStore();

  const [isLoading, setLoading] = React.useState(false);

  // const [searchData, setSearchData] = React.useState(title);
  const [sortData, setSortData] = React.useState();
  const [filterData, setFilterData] = React.useState([]);

  const {params} =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'Recipes'>>();

  const onChangeCardType = useCallback((type: boolean) => {
    return setGridType(type);
  }, []);

  const getRecipes = RecipesStore.useGetRecipeList();

  useEffect(() => {
    setLoading(true);

    const options: SeachOptions = {
      search: params.searchTerm,
      sort: sortData,
      filter: filterData,
    };
    getRecipes(options).then(() => {
      setLoading(false);
    });
  }, [sortData, filterData, getRecipes, params]);

  return {
    gridType,
    isLoading,
    recipes,
    onChangeCardType,
  };
};
