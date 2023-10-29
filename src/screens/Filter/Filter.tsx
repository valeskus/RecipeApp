import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@UI/Button';

import { FilterItem } from './components/FilterItem';
import { useFilterController } from './useFilterController';
import { styles } from './styles';
import { FilterSkeleton } from './components/FilterSkeleton';

export function Filter(): JSX.Element {
  const { onSelectPress, filters, onFilterChange, isLoading } = useFilterController();

  const { bottom } = useSafeAreaInsets();
  const footerOffset = bottom || 20;

  return (
    <View style={styles.modalContainer}>
      {isLoading && <FilterSkeleton />}
      <ScrollView style={styles.filterList}>
        {filters
          .filter((filter) => !!filter.values.length)
          .map((filter) => (
            <FilterItem
              key={filter.title}
              filterTitle={filter.title}
              filterName={filter.name}
              values={filter.values}
              multiple={filter.multiple}
              onFilterChange={onFilterChange}
            />
          ))}
      </ScrollView>
      <View style={[styles.footerOffset, { height: footerOffset }]} />
      <View style={[styles.selectButtonContainer, { bottom: footerOffset }]}>
        <Button icon="select" onPress={onSelectPress} />
      </View>
    </View>
  );
}
