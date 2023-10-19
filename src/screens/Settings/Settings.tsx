import React from 'react';
import { Image, Pressable } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';
import { useSettingButtonController } from './useSettingsController';

export function SettingButton(): JSX.Element {
  const {  } = useSettingButtonController();

  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Image source={Icons.setting} style={styles.buttonImage} />
    </Pressable>
  );
}
