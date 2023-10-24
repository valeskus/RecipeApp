import React from 'react';
import { Pressable, Image } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';
import { useSettingsButtonController } from './useSettingsButtonController';

export function SettingsButton(): JSX.Element {
    const { onPressSetting } = useSettingsButtonController();

    return (
      <Pressable
        onPress={onPressSetting}
        style={({ pressed }) => [
                pressed && styles.buttonPressed,
        ]}
      >
        <Image source={Icons.setting} style={styles.buttonImage} />
      </Pressable>
    );
}
