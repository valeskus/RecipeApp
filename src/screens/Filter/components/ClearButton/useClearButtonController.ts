import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

export const useClearButtonController = () => {
  const setSearchOptions = SearchStore.useSetSearchOptions();

  const onClearFilters = useCallback(() => {
    setSearchOptions({
      filter: [],
    });
  }, []);

  return {
    onClearFilters,
  };
};
