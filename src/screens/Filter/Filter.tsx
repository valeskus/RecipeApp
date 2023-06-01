import React from 'react';
import {ScrollView, View} from 'react-native';
import {FilterItem} from './components/FilterItem';

import {useFilterController} from './useFilterController';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from '../../UI/Button';

export function Filter(): JSX.Element {
  const {onSelectPress, onFilterChange, filters} = useFilterController();

  const {bottom} = useSafeAreaInsets();
  const fotterOffset = bottom || 20;

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
      <View style={[styles.footerOffset, {height: fotterOffset}]} />
      <View style={[styles.selectButtonContainer, {bottom: fotterOffset}]}>
        <Button icon="select" onPress={onSelectPress} />
      </View>
    </View>
  );
}
