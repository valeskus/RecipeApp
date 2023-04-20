import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {FilterItem} from '../../components/FilterItem';
import {Button} from '../../UI/Button';
import {useFilterController} from './useFilterController';

export function Filter(): JSX.Element {
  const {onCacnelPress, onFilterChange, filters} = useFilterController();

  return (
    <ScrollView style={styles.filterScreenContainer}>
      <View style={styles.goBackButton}>
        <Button icon="cancel" onPress={onCacnelPress} />
      </View>
      <View>
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
      </View>
    </ScrollView>
  );
}
