import React from 'react';
import { ScrollView, View } from 'react-native';

import { Button } from '@UI/Button';

import { FilterItem } from './components/FilterItem';
import { useFilterController } from './useFilterController';
import { styles } from './styles';
import { FilterSkeleton } from './components/FilterSkeleton';

export function Filter(): JSX.Element {
  const { onSelectPress, filters, onFilterChange, isLoading } = useFilterController();

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
        <View style={styles.selectButtonContainer}>
          <Button icon="select" onPress={onSelectPress} />
        </View>
      </ScrollView>
    </View>
  );
}
