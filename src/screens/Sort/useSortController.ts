import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';

import { EventService } from '@services/EventService';

export const useSortController = () => {

  const navigation = useNavigation();

  const { sortOptions } = RecipesStore.useRecipesStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const resetRecipes = RecipesStore.useResetRecipeList();

  const onSortChange = useCallback((value: string) => {
    setSearchOptions({ sort: value, offset: 0 });

    EventService.emit('action:change-sort', value);

    resetRecipes();
    navigation.goBack();
  }, [sortOptions]);

  useEffect(() => {
    EventService.emit('view:sort');
  }, []);

  return {
    onSortChange,
    sortOptions,
  };
};
