import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {FilterModel} from '../../models';
import {PickListItem} from '../../UI/PickListItem';

export type Props = {
  filter: FilterModel;
  index: number;
  id: string;
  onChange: (filterId: string, valueId: string) => void;
};

//TODO onChange

export function FilterItem({filter, index, id, onChange}: Props): JSX.Element {
  const [selected, setSelected] = React.useState('');
  //TODO
  const handleSelectedValue = useCallback(
    (valueId: string) => {
      setSelected(valueId);
      return onChange(id, selected);
    },
    [id, selected, onChange],
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
