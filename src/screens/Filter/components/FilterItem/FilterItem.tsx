import React from 'react';
import { View, Text } from 'react-native';

import { PickListItem } from '@UI/PickListItem';
import { FilterLabelsMapModel, FilterLabelsMap, FilterValuesMap, FilterValuesMapModel } from '@UI/FilterMap';

import { styles } from './styles';

import { FilterItemValueModel } from 'src/models';

interface Props {
  filterName: string;
  values: Array<FilterItemValueModel>;
}

export function FilterItem({ filterName, values }: Props): JSX.Element {
  return (
    <View style={styles.filterScreenContainer}>
      <Text style={styles.filterLabel}>{FilterLabelsMap[filterName as keyof FilterLabelsMapModel]} :</Text>
      {values.map((value, index) => {
        return (
          <PickListItem
            key={index}
            label={FilterValuesMap[value.value as keyof FilterValuesMapModel] || value.value}
            isActive={value.isActive} onChange={() => { }}
          />
        );
      })}
    </View>
  );
}
