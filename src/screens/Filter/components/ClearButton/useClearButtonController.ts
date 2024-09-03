import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

export const useClearButtonController = () => {
  const setSearchOptions = SearchStore.useSetPendingSearchOptions();
  const { options } = SearchStore.useSearchStore();

  const onClearFilters = useCallback(() => {
    setSearchOptions({
      filter: [],
    });
  }, []);

  return {
    onClearFilters,
    isDisabled: options.filter?.length === 0,
  };
};
