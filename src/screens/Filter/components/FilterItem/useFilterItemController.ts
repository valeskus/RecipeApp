import { useCallback } from 'react';

import { FilterItemValueModel } from '../../../../models';

export interface UseFilterItemControllerParams {
  filterTitle: string;
  filterName: string;
  values: Array<FilterItemValueModel>;
  multiple: boolean;
  onFilterChange: (filterName: string, value: string) => void;
}

export const useFilterItemController = (params: UseFilterItemControllerParams) => {

  const onMultipleFilterChange = useCallback((value: string, previousValues: Array<string>) => {

    if (previousValues.length === 0) {
      return params.onFilterChange(params.filterName, value);
    }

    if (previousValues.includes(value)) {

      return params.onFilterChange(params.filterName, previousValues
        .filter((item) => item !== value).toString().replaceAll(',', '|'));
    }

    return params.onFilterChange(params.filterName, previousValues.toString().replaceAll(',', '|') + `|${value}`);
  }, [params.multiple]);

  const handleChange = useCallback((value: string) => {
    const previousValueArray = params.values.filter((previousValue) => previousValue.isActive === true)
      .map((item) => item.value);

    if (previousValueArray[0] === `${value}`) {
      return params.onFilterChange(params.filterName, '');
    }

    params.onFilterChange(params.filterName, value);

    if (params.multiple) {
      onMultipleFilterChange(value, previousValueArray);
    }
  }, [params.values, params.multiple]);

  return {
    handleChange,
  };
};
