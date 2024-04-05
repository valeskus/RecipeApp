import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';

import * as SearchStore from '@stores/search';

import { EventService } from '@services/EventService';

import { CategoryModel } from '../../../../models';

export const useCategoryCardsController = (categories: Array<CategoryModel>) => {

  const navigation = useNavigation();

  const setSearchTerm = SearchStore.useSetSearchTerm();

  const onPress = useCallback((categoryTitle: string) => {
    setSearchTerm(categoryTitle);

    EventService.emit('action:search-category', categoryTitle);

    navigation.navigate('Recipes');
  }, []);

  const data = useMemo(() => {

    if (categories.length % 2 === 0) {
      return categories;
    }

    return [
      ...categories,
      {
        id: 'EMPTY',
        title: '',
        image: '',
      },
    ];
  }, [categories]);

  return {
    onPress,
    data,
  };
};
