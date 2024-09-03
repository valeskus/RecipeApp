import { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

import * as RecipesStore from '@stores/recipes';
import * as SearchStore from '@stores/search';
import * as ErrorsStore from '@stores/errors';

import { EventService } from '@services/EventService';

export const useFilterController = () => {
  const navigation = useNavigation();

  const { filters, isRecipesFetching } = RecipesStore.useRecipesStore();
  const setSearchOptions = SearchStore.useSetPendingSearchOptions();
  const searchOptions = SearchStore.useSearchStore();

  const errorGetRecipes = ErrorsStore.useGetErrorFor('getRecipes');
  const resetError = ErrorsStore.useResetErrors('getRecipes');
  const { t } = useTranslation();

  const onFilterChange = useCallback(
    (filterName: string, value: string) => {
      const searchOptionsFilters = searchOptions.options.filter?.filter((item) => item.key !== filterName);
      if (!value) {
        setSearchOptions({
          filter: searchOptionsFilters,
        });

        return;
      }

      EventService.emit('action:change-filter', JSON.stringify({ filterName, value }));

      setSearchOptions({
        filter: [...searchOptionsFilters || [], { key: filterName, value: value }],
      });

    },
    [searchOptions.options.filter],
  );

  const onSelectPress = () => {
    resetError();
    navigation.goBack();
  };

  useEffect(() => {
    if (errorGetRecipes) {

      Alert.alert(t('errors.title'), t('errors.description'), [
        {
          text: t('errors.ok'),
          onPress: () => {
            resetError();
            navigation.goBack();

          },
        },
      ]);
    }
  }, [errorGetRecipes]);

  useEffect(() => {
    return () => {
      resetError();
    };
  }, []);

  useEffect(() => {
    EventService.emit('view:filter');
  }, []);

  return {
    onSelectPress,
    onFilterChange,
    filters,
    isLoading: isRecipesFetching,
    isError: !!errorGetRecipes,
  };
};
