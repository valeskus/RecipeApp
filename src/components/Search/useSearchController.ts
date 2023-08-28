import { RefObject, createRef, useCallback } from 'react';
import { TextInput } from 'react-native';

import * as SearchStore from '@stores/search';

export interface UseSearchControllerParams {
  onSearch: () => void;
}

export const useSearchController = (params: UseSearchControllerParams) => {
  const { searchTerm } = SearchStore.useSearchStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();

  const searchInputRef: RefObject<TextInput> = createRef();

  const handleChange = useCallback(
    (nextValue: string) => {
      setSearchOptions({ searchTerm: nextValue, offset: 0  });
    },
    [setSearchOptions],
  );
  const handleSearch = useCallback(() => {
    params.onSearch();
  }, [params]);

  const handleResetSearchInput = useCallback(() => {
    setSearchOptions({ searchTerm: '', offset: 0 });
  }, [setSearchOptions]);

  const handlePress = useCallback(() => {
    searchInputRef.current?.focus();
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
