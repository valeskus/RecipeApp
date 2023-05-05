import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import * as SearchStore from '../../../stores/search';

export const useCategoryListControler = () => {
  const navigation = useNavigation();
  const setSearchTerm = SearchStore.useSearchTerm();

  const handleSearch = useCallback((searchData: string) => {
    setSearchTerm({searchTerm: searchData});
    navigation.navigate('Recipes');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    handleSearch,
  };
};
