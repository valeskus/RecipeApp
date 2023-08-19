import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

export const useFilterController = () => {
  const navigation = useNavigation();

  const { filters } = RecipesStore.useRecipesStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const searchOptions = SearchStore.useSearchStore();

  const onFilterChange = useCallback(
    (filterName: string, value: string) => {

      const searchOptionsFilters =  searchOptions.filter.filter((item) => item.key !== filterName);

      if (!value) {
        return setSearchOptions({
          filter: searchOptionsFilters,
        });
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

  return {
    onSelectPress,
    onFilterChange,
    filters,
  };
};
