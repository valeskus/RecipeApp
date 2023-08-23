import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

export const useSortController = () => {

  const navigation = useNavigation();

  const { sortOptions } = RecipesStore.useRecipesStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const searchOptions = SearchStore.useSearchStore();

  const getRecipes = RecipesStore.useGetRecipeList();

  const handleSearch = useCallback(async () => {
    const prevSort = sortOptions.find((sort) => sort.value === searchOptions.sort && sort.isActive);
    if (prevSort) {
      return;
    }

    await getRecipes(searchOptions);
  }, [searchOptions]);

  const onSortChange = useCallback((value: string) => {
    setSearchOptions({ sort: value });
    navigation.goBack();
  },
  [sortOptions],
  );

  useEffect(() => {
    handleSearch();
  }, [searchOptions.sort]);

  return {
    onSortChange,
    sortOptions,
  };
};
