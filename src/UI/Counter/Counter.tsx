import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {styles} from './styles';
import {
  UseCounterControlerParams,
  useCounterControler,
} from './useCounterControler';

interface Props extends UseCounterControlerParams {}

export function Counter({count, onChange}: Props): JSX.Element {
  const {onMinusPress, onPlusPress} = useCounterControler({count, onChange});
  return (
    <View style={styles.counterContainer}>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onMinusPress}>
        <Text style={styles.buttonContent}>-</Text>
      </Pressable>
      <Text style={styles.count}>{count}</Text>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPlusPress}>
        <Text style={styles.buttonContent}>+</Text>
      </Pressable>
    </View>
  );
}
