import {RefObject, createRef, useCallback} from 'react';
import {TextInput} from 'react-native';

import * as SearchStore from '../../../stores/search';

export const useSearchController = (onSearch: () => void) => {
  const {searchTerm} = SearchStore.useSearchStore();

  const setSearchTerm = SearchStore.useSearchTerm();
  const searchInputRef: RefObject<TextInput> = createRef();

  const handleChange = useCallback(
    (nextValue: string) => {
      setSearchTerm({searchTerm: nextValue});
    },
    [setSearchTerm],
  );
  const handleSearch = useCallback(() => {
    onSearch();
  }, [onSearch]);

  const handleResetSearchInput = useCallback(() => {
    setSearchTerm({searchTerm: ''});
  }, [setSearchTerm]);

  const hendlePress = useCallback(() => {
    searchInputRef.current?.focus();
  }, [searchInputRef]);
  return {
    searchTerm,
    searchInputRef,
    handleChange,
    handleSearch,
    handleResetSearchInput,
    hendlePress,
  };
};
