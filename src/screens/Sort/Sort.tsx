import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PickListItem } from '@UI/PickListItem';

import { useSortController } from './useSortController';
import { styles } from './styles';

export function Sort(): JSX.Element {
  const { sortOptions,
    onSortChange,
  } =
    useSortController();

  const { bottom } = useSafeAreaInsets();
  const footerOffset = bottom || 20;

  return (
    <View style={styles.modalContainer}>
      <ScrollView>
        {sortOptions.map((sort, index) => {
          return (
            <PickListItem
              label={sort.value}
              key={index}
              isActive={sort.isActive}
              onChange={onSortChange}
            />
          );
        })}
      </ScrollView>
      <View style={[styles.footerOffset, { height: footerOffset }]} />
    </View>
  );
}
