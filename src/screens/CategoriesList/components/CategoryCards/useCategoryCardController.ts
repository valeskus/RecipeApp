import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import * as SearchStore from '../../../../stores/search';

export const useCategoryCardController = () => {

  const navigation = useNavigation();

  const setSearchTerm = SearchStore.useSearchTerm();

  const onPress = useCallback((categoryTitle: string) => {
    setSearchTerm(categoryTitle);

    return navigation.navigate('Recipes');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    onPress,
  };
};
