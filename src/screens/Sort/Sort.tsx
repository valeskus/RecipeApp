import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../UI/Button';
import {useSortController} from './useSortController';
import {PickListItem} from '../../UI/PickListItem';
export function Sort(): JSX.Element {
  const {onCacnelPress, onSelectPress, sortOptions, onSortChange, sortItem} =
    useSortController();
  return (
    <View style={styles.sortScreenContainer}>
      <Button icon="cancel" onPress={onCacnelPress} />
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
      <Button icon="select" onPress={onSelectPress} />
    </View>
  );
}
