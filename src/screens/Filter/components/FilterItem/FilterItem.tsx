import React from 'react';
import { View, Text } from 'react-native';

import { PickListItem } from '@UI/PickListItem';

import { styles } from './styles';

import { FilterItemValueModel, FilterModel } from 'src/models';

interface Props {
  filter: string;
  values: Array<FilterItemValueModel>;
  onChange: (changeItemValue: FilterItemValueModel[], changeItem: keyof FilterModel) => void;
}

export function FilterItem({ filter, values, onChange }: Props): JSX.Element {
  function handleChange(currentValue: string) {

    const prewValue =  values.filter((value) => {
      return value.isActive === true;
    });
    if (prewValue[0]) {
      prewValue[0].isActive = false;
    }

    const changedValue = values.filter((value) => {
      return value.value === currentValue;
    });
    changedValue[0].isActive = !changedValue[0].isActive;
    onChange(changedValue, filter as keyof FilterModel);
  }

  return (
    <View style={styles.filterScreenContainer}>
      <Text style={styles.filterLabel}>{filter} :</Text>
      {values.map((value, index) => {
        return <PickListItem key={index} label={value.value} isActive={value.isActive} onChange={handleChange}/>;
      })}
    </View>
  );
}
