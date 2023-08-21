import React from 'react';
import { View, Text } from 'react-native';

import { PickListItem } from '@UI/PickListItem';

import { styles } from './styles';
import { useFilterItemController, UseFilterItemControllerParams } from './useFilterItemController';

interface Props extends UseFilterItemControllerParams {}

export function FilterItem(props: Props): JSX.Element {
  const { handleChange } = useFilterItemController(props);

  return (
    <View style={styles.filterScreenContainer}>
      <Text style={styles.filterLabel}>{props.filterTitle} :</Text>
      {props.values.map(({ value, title, isActive, count }) => {
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
