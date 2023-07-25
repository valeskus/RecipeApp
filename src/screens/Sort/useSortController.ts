import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

export const useSortController = () => {

  const navigation = useNavigation();

  const { sortOptions } = RecipesStore.useRecipesStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const { searchTerm } = SearchStore.useSearchStore();

  const onSortChange = useCallback((value: string) => {
    setSearchOptions({ searchTerm, sort: value });
    navigation.goBack();
  },
  [sortOptions],
  );

  return {
    onSortChange,
    sortOptions,
  };
};
