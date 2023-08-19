import { useCallback } from 'react';

import * as SearchStore from '@stores/search';

import { FiltersValuesManager } from '@managers/FilterManager';

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

    const previousValue = searchOptions.filter.filter((item) => item.key === params.filterName);
    params.onFilterChange(params.filterName,
      FiltersValuesManager.getAppliedFiltersString(previousValue[0]?.value, value, params.multiple));

  }, [params.values, params.multiple, searchOptions.filter]);

  return {
    handleChange,
  };
};
