import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as ErrorsStore from '@stores/errors';
import * as CategoriesStore from '@stores/categories';

import { EventService } from '@services/EventService';

export const useCategoryListController = () => {
  const [isLoading, setLoading] = useState(false);
  const { categories } = CategoriesStore.useCategoriesStore();
  const { i18n } = useTranslation();

  const getCategories = CategoriesStore.useGetCategories();
  const errorGetCategories = ErrorsStore.useGetErrorFor('getCategories');
  const navigation = useNavigation();
  const resetError = ErrorsStore.useResetErrors('getCategories');

  const handleSearch = useCallback(() => {
    navigation.navigate('Recipes');
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);

    if (errorGetCategories) {
      resetError();
    }

    await getCategories();

    setLoading(false);
  }, [errorGetCategories]);

  useEffect(() => {
    fetchData();

    return () => {
      resetError();
    };
  }, [i18n.language]);

  useEffect(() => {
    EventService.emit('view:categories-list');
  }, []);

  return {
    handleSearch,
    fetchData,
    categories,
    isLoading,
    isError: !!errorGetCategories,
  };
};
