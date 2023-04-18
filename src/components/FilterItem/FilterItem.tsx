import React, {useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FilterModel} from '../../models';
import {PickListItem} from '../../UI/PickListItem';

export type Props = {
  filter: FilterModel;
  index: number;
  key: string;
  onChange: (filterId: string, valueId: string) => void;
};

//TODO onChange

export function FilterItem({filter, index, key, onChange}: Props): JSX.Element {
  const [selected, setSelected] = React.useState('');
  //TODO
  const handleSelectedValue = useCallback(
    (id: string) => {
      setSelected(id);
      return onChange(key, selected);
    },
    [key, selected, onChange],
  );

  return (
    <View style={styles.filterScreenContainer}>
      <Text>{`${index + 1}. ${filter.title}`}</Text>
      {filter.values.map(value => {
        return (
          <PickListItem
            item={value.label}
            key={value.id}
            id={value.id}
            onChange={handleSelectedValue}
            active={selected}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  filterScreenContainer: {
    flex: 1,
    padding: 10,
  },
});
