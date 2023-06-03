import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export const useCategoryListController = () => {
  const navigation = useNavigation();

  const handleSearch = useCallback(() => {
    navigation.navigate('Recipes');
  }, []);

  return {
    handleSearch,
  };
};
