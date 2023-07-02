import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

export const useSortController = () => {

  const navigation = useNavigation();

  const { sortOptions } = RecipesStore.useRecipesStore();
  const setSearch = SearchStore.useSetSearch();
  const { searchTerm } = SearchStore.useSearchStore();

  const onSortChange = useCallback((value: string) => {
    setSearch({ searchTerm, sort: value });
    navigation.goBack();
  },
  [sortOptions],
  );

  useEffect(() => {

  }, []);

  return {
    onSortChange,
    sortOptions,
  };
};
