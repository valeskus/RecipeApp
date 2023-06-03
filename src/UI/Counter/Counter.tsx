import React from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from './styles';
import {
  UseCounterControllerParams,
  useCounterController,
} from './useCounterController';

interface Props extends UseCounterControllerParams {}

export function Counter(props: Props): JSX.Element {
  const { onMinusPress, onPlusPress } = useCounterController(props);

  return (
    <View style={styles.counterContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onMinusPress}
      >
        <Text style={styles.buttonContent}>-</Text>
      </Pressable>
      <Text style={styles.count}>{props.count}</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPlusPress}
      >
        <Text style={styles.buttonContent}>+</Text>
      </Pressable>
    </View>
  );
}
