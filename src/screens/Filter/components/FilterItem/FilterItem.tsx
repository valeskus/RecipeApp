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
      {values.map((value, index) => {
        return <PickListItem key={index} label={value.value} isActive={value.isActive} onChange={() => {}}/>;
      })}
    </View>
  );
}
