import React from 'react';
import { Image, Pressable } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {}

export function ClearButton({}: Props): JSX.Element {
  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Image source={Icons.clean} style={styles.buttonImage} />
    </Pressable>
  );
}
