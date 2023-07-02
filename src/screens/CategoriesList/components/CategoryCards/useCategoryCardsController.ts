import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

export const useCategoryCardsController = () => {

  const navigation = useNavigation();

  const setSearchTerm = SearchStore.useSetSearch();

  const onPress = useCallback((categoryTitle: string) => {
    setSearchTerm({ searchTerm: categoryTitle });

    navigation.navigate('Recipes');
  }, []);

  return {
    onPress,
  };
};
