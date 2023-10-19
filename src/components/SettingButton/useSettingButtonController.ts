import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

export const useSettingButtonController = () => {
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
