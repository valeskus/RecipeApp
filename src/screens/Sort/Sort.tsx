import React from 'react';
import {ScrollView} from 'react-native';

import {useSortController} from './useSortController';
import {PickListItem} from '../../UI/PickListItem';
import {Modal} from '../../UI/Modal';
export function Sort(): JSX.Element {
  const {onCleanPress, onSelectPress, sortOptions, onSortChange, sortItem} =
    useSortController();

  const sortList = (
    <ScrollView>
      {sortOptions.map(sort => {
        return (
          <PickListItem
            item={sort.label}
            id={sort.id}
            active={sortItem}
            onChange={onSortChange}
          />
        );
      })}
    </ScrollView>
  );
  return (
    <Modal
      children={sortList}
      title={'Sort'}
      onSelectPress={onSelectPress}
      onCleanPress={onCleanPress}
    />
  );
}
