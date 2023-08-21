import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

export const useFilterController = () => {
  const navigation = useNavigation();

  const { filters } = RecipesStore.useRecipesStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const searchOptions = SearchStore.useSearchStore();
  const getRecipes = RecipesStore.useGetRecipeList();

  const handleSearch = useCallback(async () => {
    await getRecipes(searchOptions);
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
  };
};
