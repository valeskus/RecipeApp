import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

export const useClearButtonController = () => {
  const setSearchOptions = SearchStore.useSetSearchOptions();
  const { options } = SearchStore.useSearchStore();

  const onClearFilters = useCallback(() => {
    setSearchOptions({
      filter: [],
    });
  }, []);

  return {
    onClearFilters,
    isFiltersActive: options.filter.length === 0,
  };
};
