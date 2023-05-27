import React from 'react';
import {ScrollView, View} from 'react-native';

import {useSortController} from './useSortController';
import {PickListItem} from '../../UI/PickListItem';
import {Button} from '../../UI/Button';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function Sort(): JSX.Element {
  const {onSelectPress, sortOptions, onSortChange, activeSortId} =
    useSortController();

  const {bottom} = useSafeAreaInsets();
  const fotterOffset = bottom || 20;

  return (
    <View style={styles.modalContainer}>
      <ScrollView>
        {sortOptions.map(sort => {
          return (
            <PickListItem
              label={sort.label}
              id={sort.id}
              key={sort.id}
              activeId={activeSortId}
              onChange={onSortChange}
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
