import React, {useCallback} from 'react';
import {SeachOptions} from '../../../api/recipes.api';
import * as RecipesStore from '../../../stores/recipes';
import {BaseRecipeModel} from '../../../models';

// import {useRoute} from '@react-navigation/native';
//TODO:  How to get route.params with correct type?

export const useRecipeListController = () => {
  const [gridType, setGridType] = React.useState(true);

  // const route = useRoute();
  // const title = route.params;
  const title = '';
  const {recipes} = RecipesStore.useRecipesStore();

  const [isLoading, setLoading] = React.useState(false);
  const [recipesList, setRecipesList] =
    React.useState<Array<BaseRecipeModel>>(recipes);

  const [searchData, setSearchData] = React.useState(title);
  const [sortData, setSortData] = React.useState();
  const [filterData, setFilterData] = React.useState([]);

  const onChangeCardType = useCallback((type: boolean) => {
    return setGridType(type);
  }, []);

  const getRecipes = RecipesStore.useGetRecipeList();

  React.useEffect(() => {
    setLoading(true);
    const options: SeachOptions = {
      search: searchData,
      sort: sortData,
      filter: filterData,
    };
    // TODO options and states
    getRecipes(options).then(() => {
      setLoading(false);
    });
  }, [searchData, sortData, filterData, getRecipes]);

  const onSearch = useCallback(
    (value: string) => {
      const newRecipeList = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(value.toLowerCase()),
      );
      setRecipesList(newRecipeList);
    },
    [recipes],
  );

  return {
    gridType,
    isLoading,
    recipesList,
    onChangeCardType,
    onSearch,
  };
};
