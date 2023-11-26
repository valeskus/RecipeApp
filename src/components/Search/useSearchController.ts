import { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';

import * as SearchStore from '@stores/search';

export interface SearchControllerParams {
  onSearch: () => void;
}

export const useSearchController = (params: SearchControllerParams) => {
  const { searchTerm } = SearchStore.useSearchStore();
  const [pendingSearchTerm, setPendingSearchTerm] = useState(searchTerm);
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const resetSearchOptions = SearchStore.useResetSearchOptions();

  const [isFocused, setFocused] = useState(false);

  const searchInputRef = useRef<TextInput>(null);

  const handleChange = useCallback(
    (nextValue: string) => {
      setPendingSearchTerm(nextValue);
    },
    [],
  );
  const handleSearch = useCallback(() => {
    Keyboard.dismiss();

    if (!pendingSearchTerm) {
      return;
    }

    if (pendingSearchTerm === searchTerm) {
      return;
    }

    resetSearchOptions();
    params.onSearch();

    setSearchOptions({ searchTerm: pendingSearchTerm });

  }, [pendingSearchTerm, searchTerm, params.onSearch]);

  const handlePress = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleResetSearchInput = useCallback(() => {
    setPendingSearchTerm('');
    handlePress();
  }, []);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  useEffect(() => {
    setPendingSearchTerm(searchTerm);
  }, [searchTerm]);

  const cutSearchTerm = useCallback(() => {
    if (pendingSearchTerm.length > 35) {
      return pendingSearchTerm.slice(0, 32).concat('', '...');
    }

    return pendingSearchTerm;
  }, [pendingSearchTerm]);

  return {
    searchTerm: pendingSearchTerm,
    searchInputRef,
    isFocused,
    handleBlur,
    handleFocus,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    handlePress,
    cutSearchTerm,
  };
};
