import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import * as CategoriesStore from '../../../../stores/categories';
import * as SearchStore from '../../../../stores/search';

export const useCategoryCardController = () => {
  const [isLoading, setLoading] = useState(false);
  const { categories } = CategoriesStore.useCategoriesStore();

  const getCategories = CategoriesStore.useGetCategories();

  const navigation = useNavigation();

  const fetchData = async () => {
    setLoading(true);

    await getCategories();

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSearchTerm = SearchStore.useSearchTerm();

  const onPress = useCallback((categoryTitle: string) => {
    setSearchTerm(categoryTitle);

    return navigation.navigate('Recipes');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    onRetry: fetchData,
    onPress,
    isLoading,
    categories,
  };
};
