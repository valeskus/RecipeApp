import React from 'react';
import { Image, Pressable } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';
import { useClearButtonController } from './useClearButtonController';

export function ClearButton(): JSX.Element {
  const { onClearFilters } = useClearButtonController();

  return (
    <Pressable
      onPress={onClearFilters}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Image source={Icons.clean} style={styles.buttonImage} />
    </Pressable>
  );
}
