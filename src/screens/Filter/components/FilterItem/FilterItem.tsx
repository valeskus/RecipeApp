import React from 'react';
import { View, Text } from 'react-native';

import { FilterModel } from '../../../../models';

import { styles } from './styles';

interface Props {
  filter: FilterModel;
  index: number;
}

export function FilterItem({ filter, index }: Props): JSX.Element {

  return (
    <View style={styles.filterScreenContainer}>
      <Text>{`${index + 1}. ${filter.title}`}</Text>
    </View>
  );
}
