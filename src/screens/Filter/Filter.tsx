import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@UI/Button';

import { FilterItem } from './components/FilterItem';
import { useFilterController } from './useFilterController';
import { styles } from './styles';

export function Filter(): JSX.Element {
  const { onSelectPress, onFilterChange, filters } = useFilterController();

  const { bottom } = useSafeAreaInsets();
  const footerOffset = bottom || 20;

  return (
    <View style={styles.modalContainer}>
      <ScrollView>
        {filters.map((filter, index) => {
          return (
            <FilterItem
              filter={filter}
              index={index}
              key={filter.id}
              id={filter.id}
              onChange={onFilterChange}
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
