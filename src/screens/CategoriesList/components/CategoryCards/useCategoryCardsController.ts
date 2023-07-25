import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

export const useCategoryCardsController = () => {

  const navigation = useNavigation();

  const setSearchOptions = SearchStore.useSetSearchOptions();

  const onPress = useCallback((categoryTitle: string) => {
    setSearchOptions({ searchTerm: categoryTitle });

    navigation.navigate('Recipes');
  }, []);

  return {
    onPress,
  };
};
