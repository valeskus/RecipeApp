import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

import { FilterValuesManager } from '@managers/FilterManager';

import { FilterItemValueModel } from '../../../../models';

export interface UseFilterItemControllerParams {
  filterTitle: string;
  filterName: string;
  values: Array<FilterItemValueModel>;
  multiple: boolean;
  onFilterChange: (filterName: string, value: string) => void;
}

export const useFilterItemController = (params: UseFilterItemControllerParams) => {

  const searchOptions = SearchStore.useSearchStore();

  const handleChange = useCallback((value: string) => {

    const previousValue = searchOptions.filter.find((item) => item.key === params.filterName);

    params.onFilterChange(params.filterName,
      FilterValuesManager.getAppliedFiltersString(previousValue?.value || '', value, params.multiple));

  }, [params, searchOptions.filter]);

  return {
    handleChange,
  };
};
