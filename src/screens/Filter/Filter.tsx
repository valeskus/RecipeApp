import React from 'react';
import {ScrollView} from 'react-native';
import {FilterItem} from './components/FilterItem';

import {useFilterController} from './useFilterController';
import {Modal} from '../../UI/Modal';

export function Filter(): JSX.Element {
  const {onSelectPress, onCleanPress, onFilterChange, filters} =
    useFilterController();
  const filterList = (
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
  );

  return (
    <Modal
      children={filterList}
      title={'Filter'}
      onSelectPress={onSelectPress}
      onCleanPress={onCleanPress}
    />
  );
}
