import {useNavigation} from '@react-navigation/native';
import * as CategoriesStore from '../../../../../stores/categories';
import * as SearchStore from '../../../../../stores/search';

import {useEffect, useState} from 'react';

export const useCategoryCardControler = () => {
  const [isLoading, setLoading] = useState(false);
  const {categories} = CategoriesStore.useCategoriesStore();

  const getCategories = CategoriesStore.useGetCategories();

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);

    getCategories().then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setSearchTerm = SearchStore.useSearchTerm();

  const handlePress = (categoryTitle: string) => {
    setSearchTerm({searchTerm: categoryTitle}).then(() => {
      return navigation.navigate('Recipes', {searchTerm: categoryTitle});
    });
    // return navigation.navigate('Recipes', {searchTerm: categoryTitle});
  };
  return {
    handlePress,
    isLoading,
    categories,
  };
};
