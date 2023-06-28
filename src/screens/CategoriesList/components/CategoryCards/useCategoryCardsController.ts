import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

export const useCategoryCardsController = () => {

  const navigation = useNavigation();

  const setSearchTerm = SearchStore.useSearchTerm();

  const onPress = useCallback((categoryTitle: string) => {
    setSearchTerm(categoryTitle);

    return navigation.navigate('Recipes');
  }, []);

  return {
    onPress,
  };
};
