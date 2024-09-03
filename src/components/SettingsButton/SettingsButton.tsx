import React from 'react';
import { Pressable, Image } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';
import { useSettingsButtonController } from './useSettingsButtonController';

export function SettingsButton(): JSX.Element {
  const { onPress } = useSettingsButtonController();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.buttonPressed,
      ]}
    >
      <Image source={Icons.setting} style={styles.buttonImage} />
    </Pressable>
  );
}
