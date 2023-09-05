import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

export const useFilterController = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);

  const { filters } = RecipesStore.useRecipesStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const searchOptions = SearchStore.useSearchStore();
  const getRecipes = RecipesStore.useGetRecipeList();
  const resetRecipes = RecipesStore.useResetRecipeList();

  const handleSearch = useCallback(async () => {
    setLoading(true);
    resetRecipes();
    await getRecipes(searchOptions);
    setLoading(false);

  }, [searchOptions]);

  const onFilterChange = useCallback(
    (filterName: string, value: string) => {

      const searchOptionsFilters =  searchOptions.filter.filter((item) => item.key !== filterName);

      if (!value) {
        setSearchOptions({
          filter: searchOptionsFilters,
        });

        return;
      }

      setSearchOptions({
        filter: [...searchOptionsFilters, { key: filterName, value: value }],
      });

    },
    [searchOptions.filter],
  );

  const onSelectPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    handleSearch();
  }, [searchOptions.filter]);

  return {
    onSelectPress,
    onFilterChange,
    filters,
    isLoading,
  };
};
