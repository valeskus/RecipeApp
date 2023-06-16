import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  onPress: () => any;
  text: string;
}
export function RectangleButton({
  onPress,
  text,
}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.buttonTitle}>{text}</Text>

    </Pressable>

  );
}
