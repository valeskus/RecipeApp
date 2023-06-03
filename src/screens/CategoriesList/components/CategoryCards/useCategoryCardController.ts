import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import * as CategoriesStore from '@stores/categories';
import * as SearchStore from '@stores/search';

export const useCategoryCardController = () => {
  const [isLoading, setLoading] = useState(false);
  const { categories } = CategoriesStore.useCategoriesStore();

  const getCategories = CategoriesStore.useGetCategories();

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);

    getCategories().then(() => {
      setLoading(false);
    });
  }, []);

  const setSearchTerm = SearchStore.useSearchTerm();

  const onPress = useCallback((categoryTitle: string) => {
    setSearchTerm(categoryTitle);

    return navigation.navigate('Recipes');
  }, []);

  return {
    onPress,
    isLoading,
    categories,
  };
};
