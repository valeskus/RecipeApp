import {RefObject, createRef, useCallback} from 'react';
import {TextInput} from 'react-native';

import * as SearchStore from '../../stores/search';

export interface UseSearchControllerParams {
  onSearch: () => void;
}

export const useSearchController = (params: UseSearchControllerParams) => {
  const {searchTerm} = SearchStore.useSearchStore();
  const setSearchTerm = SearchStore.useSearchTerm();

  const searchInputRef: RefObject<TextInput> = createRef();

  const handleChange = useCallback(
    (nextValue: string) => {
      setSearchTerm(nextValue);
    },
    [setSearchTerm],
  );
  const handleSearch = useCallback(() => {
    params.onSearch();
  }, [params]);

  const handleResetSearchInput = useCallback(() => {
    setSearchTerm('');
  }, [setSearchTerm]);

  const handlePress = useCallback(() => {
    searchInputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    searchTerm,
    searchInputRef,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    handlePress,
  };
};
