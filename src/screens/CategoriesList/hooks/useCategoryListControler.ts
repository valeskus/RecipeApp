import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const useCategoryListControler = () => {
  const navigation = useNavigation();

  const handleSearch = useCallback((searchTerm: string) => {
    return navigation.navigate('Recipes', {searchTerm});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    handleSearch,
  };
};
