import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

export const useClearButtonController = () => {
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const { filter } = SearchStore.useSearchStore();

  const onClearFilters = useCallback(() => {
    setSearchOptions({
      filter: [],
    });
  }, []);

  return {
    onClearFilters,
    isFiltersActive: filter.length === 0,
  };
};
