import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

export const useFilterController = () => {
  const navigation = useNavigation();

  const { filters, isRecipesFetching } = RecipesStore.useRecipesStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const searchOptions = SearchStore.useSearchStore();
  const onFilterChange = useCallback(
    (filterName: string, value: string) => {
      const searchOptionsFilters = searchOptions.filter.filter((item) => item.key !== filterName);

      if (!value) {
        setSearchOptions({
          filter: searchOptionsFilters,
        });

        return;
      }

      setSearchOptions({
        filter: [...searchOptionsFilters, { key: filterName, value: value }],
        offset: 0,
      });

    },
    [searchOptions.filter],
  );

  const onSelectPress = () => {
    navigation.goBack();
  };

  return {
    onSelectPress,
    onFilterChange,
    filters,
    isLoading: isRecipesFetching,
  };
};
