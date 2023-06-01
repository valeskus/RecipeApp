import {useNavigation} from '@react-navigation/native';
import * as CategoriesStore from '../../../../stores/categories';
import * as SearchStore from '../../../../stores/search';

import {useCallback, useEffect, useState} from 'react';

export const useCategoryCardControler = () => {
  const [isLoading, setLoading] = useState(false);
  const {categories} = CategoriesStore.useCategoriesStore();

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

  const onPress = useCallback(async (categoryTitle: string) => {
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
