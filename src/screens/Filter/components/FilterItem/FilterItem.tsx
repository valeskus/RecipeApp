import React from 'react';
import { View, Text } from 'react-native';

// import { PickListItem } from '@UI/PickListItem';

import { FilterModel } from '../../../../models';

import { styles } from './styles';

interface Props {
  filter: FilterModel;
  index: number;
  // id: string;
  // onChange: (filterId: string, valueId: string) => void;
}

export function FilterItem({ filter, index }: Props): JSX.Element {
  // const [selectedId, setSelectedId] = React.useState('');
  // const handleSelectedValue = useCallback(
  //   (valueId: string) => {
  //     setSelectedId(valueId);

  //     return onChange(id, selectedId);
  //   },
  //   [id, selectedId, onChange],
  // );

  return (
    <View style={styles.filterScreenContainer}>
      <Text>{`${index + 1}. ${filter.title}`}</Text>
      {/* {filter.values.map(value => {
        return (
          <PickListItem
            label={value.label}
            key={value.id}
            id={value.id}
            onChange={handleSelectedValue}
            activeId={selectedId}
          />
        );
      })} */}
    </View>
  );
}
