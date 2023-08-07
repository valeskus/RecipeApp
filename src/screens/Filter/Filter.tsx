import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@UI/Button';

import { FilterModel } from '../../models';

import { FilterItem } from './components/FilterItem';
import { useFilterController } from './useFilterController';
import { styles } from './styles';

export function Filter(): JSX.Element {
  const { onSelectPress, filters, onFilterChange } = useFilterController();

  const { bottom } = useSafeAreaInsets();
  const footerOffset = bottom || 20;

  return (
    <View style={styles.modalContainer}>
      <ScrollView>
        {Object.keys(filters).map((filter, index) => {
          return (
            <FilterItem key={index} filter={filter} values={filters[filter as keyof FilterModel]}
              onChange = {onFilterChange}
            />
          );
        })}
      </ScrollView>
      <View style={[styles.footerOffset, { height: footerOffset }]} />
      <View style={[styles.selectButtonContainer, { bottom: footerOffset }]}>
        <Button icon="select" onPress={onSelectPress} />
      </View>
    </View>
  );
}
