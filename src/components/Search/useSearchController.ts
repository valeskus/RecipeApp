import { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import * as SearchStore from '@stores/search';

export interface SearchControllerParams {
  onSearch: () => void;
}

export const useSearchController = (params: SearchControllerParams) => {
  const { searchTerm } = SearchStore.useSearchStore();
  const [pendingSearchTerm, setPendingSearchTerm] = useState(searchTerm);
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const resetSearchOptions = SearchStore.useResetSearchOptions();

  const searchInputRef = useRef<TextInput>(null);

  const handleChange = useCallback(
    (nextValue: string) => {
      setPendingSearchTerm(nextValue);
    },
    [],
  );
  const handleSearch = useCallback(() => {
    if (pendingSearchTerm === searchTerm) {
      return;
    }

    resetSearchOptions();
    params.onSearch();

    setSearchOptions({ searchTerm: pendingSearchTerm });

  }, [pendingSearchTerm, params.onSearch]);

  const handleResetSearchInput = useCallback(() => {
    setPendingSearchTerm('');
  }, []);

  const handlePress = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    setPendingSearchTerm(searchTerm);
  }, [searchTerm]);

  return {
    searchTerm: pendingSearchTerm,
    searchInputRef,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    handlePress,
  };
};
