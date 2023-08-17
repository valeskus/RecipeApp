import React, { useCallback } from 'react';
import { View, Text } from 'react-native';

import { PickListItem } from '@UI/PickListItem';

import { styles } from './styles';

import { FilterItemValueModel } from 'src/models';

interface Props {
  filterTitle: string;
  filterName: string;
  values: Array<FilterItemValueModel>;
  multiple: boolean;
  onFilterChange: (filterName: string, value: string) => void;
}

export function FilterItem({ filterTitle, filterName, values, multiple, onFilterChange }: Props): JSX.Element {
  const handleChange = useCallback((value: string) => {
    const previousValueString = values.filter((v) => v.isActive === true)
      .map((item) => item.value)
      .toString();

    if (previousValueString == value) {
      return onFilterChange(filterName, '');
    }

    onFilterChange(filterName, value);

    if (multiple) {

      if (previousValueString.includes(value)) {

        return onFilterChange(filterName, previousValueString.split(',')
          .filter((item) => item !== value).toString().replaceAll(',', '|'));
      }

      const currentValuesString = previousValueString ? previousValueString.replaceAll(',', '|') + `|${value}` : value;

      return onFilterChange(filterName, currentValuesString);
    }
  }, [values, multiple]);

  return (
    <View style={styles.filterScreenContainer}>
      <Text style={styles.filterLabel}>{filterTitle} :</Text>
      {values.map(({ value, title, isActive, count }) => {
        return (
          <PickListItem
            key={value}
            label={`${title} (${count})`}
            value={value}
            isActive={isActive}
            onChange={handleChange}
          />
        );
      })}
    </View>
  );
}
