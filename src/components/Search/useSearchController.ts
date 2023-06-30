import { RefObject, createRef, useCallback } from 'react';
import { TextInput } from 'react-native';

import * as SearchStore from '@stores/search';

export interface UseSearchControllerParams {
  onSearch: () => void;
}

export const useSearchController = (params: UseSearchControllerParams) => {
  const { search } = SearchStore.useSearchStore();
  const setSearchTerm = SearchStore.useSetSearch();
  const searchInputRef: RefObject<TextInput> = createRef();

  const handleChange = useCallback(
    (nextValue: string) => {
      setSearchTerm({ search: nextValue });
    },
    [setSearchTerm],
  );
  const handleSearch = useCallback(() => {
    params.onSearch();
  }, [params]);

  const handleResetSearchInput = useCallback(() => {
    setSearchTerm({ search: '' });
  }, [setSearchTerm]);

  const handlePress = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  return {
    search,
    searchInputRef,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    handlePress,
  };
};
