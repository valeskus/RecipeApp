import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';

import * as SearchStore from '@stores/search';

import { CategoryModel } from 'src/models';

export const useCategoryCardsController = (categories: Array<CategoryModel>) => {

  const navigation = useNavigation();

  const setSearchTerm = SearchStore.useSearchTerm();

  const onPress = useCallback((categoryTitle: string) => {
    setSearchTerm(categoryTitle);

    return navigation.navigate('Recipes');
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
