import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PickListItem } from '@UI/PickListItem';
import { Button } from '@UI/Button';

import { useSortController } from './useSortController';
import { styles } from './styles';

export function Sort(): JSX.Element {
  const { onSelectPress, sortOptions,
    // onSortChange
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
              onChange={() => {}}
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
