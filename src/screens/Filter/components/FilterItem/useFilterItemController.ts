import { useCallback } from 'react';

import { FilterItemValueModel } from 'src/models';

export interface UseFilterItemControllerParams {
  filterTitle: string;
  filterName: string;
  values: Array<FilterItemValueModel>;
  multiple: boolean;
  onFilterChange: (filterName: string, value: string) => void;
}

export const useFilterItemController = (params: UseFilterItemControllerParams) => {

  const onMultipleFilterChange = useCallback((value: string, previousValueString: string) => {
    if (previousValueString.includes(value)) {

      return params.onFilterChange(params.filterName, previousValueString.split(',')
        .filter((item) => item !== value).toString().replaceAll(',', '|'));
    }

    const currentValuesString = previousValueString ? previousValueString.replaceAll(',', '|') + `|${value}` : value;

    return params.onFilterChange(params.filterName, currentValuesString);
  }, [params.multiple]);

  const handleChange = useCallback((value: string) => {
    const previousValueString = params.values.filter((v) => v.isActive === true)
      .map((item) => item.value)
      .toString();

    if (previousValueString == value) {
      return params.onFilterChange(params.filterName, '');
    }

    params.onFilterChange(params.filterName, value);

    if (params.multiple) {
      onMultipleFilterChange(value, previousValueString);
    }
  }, [params.values, params.multiple]);

  return {
    handleChange,
  };
};
