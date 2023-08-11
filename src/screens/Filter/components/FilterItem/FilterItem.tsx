import React from 'react';
import { View, Text } from 'react-native';

import { PickListItem } from '@UI/PickListItem';

import { styles } from './styles';

import { FilterItemValueModel } from 'src/models';

interface Props {
  filterName: string;
  values: Array<FilterItemValueModel>;
}

export function FilterItem({ filterName, values }: Props): JSX.Element {
  return (
    <View style={styles.filterScreenContainer}>
      <Text style={styles.filterLabel}>{filterName} :</Text>
      {values.map(({ value, title, isActive, count }) => {
        return (
          <PickListItem
            key={value}
            label={`${title} (${count})`}
            value={value}
            isActive={isActive}
            onChange={() => { }}
          />
        );
      })}
    </View>
  );
}
