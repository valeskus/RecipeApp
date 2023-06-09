import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import * as ErrorsStore from '@stores/errors';
import * as CategoriesStore from '@stores/categories';

export const useCategoryListController = () => {
  const [isLoading, setLoading] = useState(false);
  const { categories } = CategoriesStore.useCategoriesStore();

  const getCategories = CategoriesStore.useGetCategories();
  const errorGetCategories = ErrorsStore.useGetErrorFor('getCategories');

  const navigation = useNavigation();

  const resetError = ErrorsStore.useResetErrors('getCategories');

  const handleSearch = useCallback(() => {
    navigation.navigate('Recipes');
  }, []);

  const fetchData = async () => {
    setLoading(true);

    await getCategories();

    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    return () => {
      resetError();
    };
  }, []);

  return {
    handleSearch,
    categories,
    isLoading,
    isError: !!errorGetCategories,
    fetchData,
  };
};
