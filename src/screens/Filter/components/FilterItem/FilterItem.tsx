import React from 'react';
import { View, Text } from 'react-native';

import { PickListItem } from '@UI/PickListItem';

import { styles } from './styles';

import { FilterItemValueModel } from 'src/models';

interface Props {
  // onPress: () => any;
  filter: string;
  values: Array<FilterItemValueModel>;
}

export function FilterItem({ filter, values }: Props): JSX.Element {

  return (
    <View style={styles.filterScreenContainer}>
      <Text style={styles.filterLabel}>{filter} :</Text>
      {values.map((value, index) => {
        return <PickListItem key={index} label={value.value} isActive={value.isActive} onChange={() => {}}/>;
      })}
    </View>
  );
}
