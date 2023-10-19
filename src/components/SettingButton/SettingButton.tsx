import React from 'react';
import { Image, Pressable } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';
import { useSettingButtonController } from './useSettingButtonController';

export function SettingButton(): JSX.Element {
  const { onClearFilters } = useSettingButtonController();

  return (
    <Pressable
      onPress={onClearFilters}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Image source={Icons.setting} style={styles.buttonImage} />
    </Pressable>
  );
}
