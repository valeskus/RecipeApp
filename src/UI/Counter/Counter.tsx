import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  count: number;
  onPress: () => void;
}
export function Counter({count, onPress}: Props): JSX.Element {
  return (
    <View style={styles.counterContainer}>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPress}>
        <Text style={styles.buttonContent}>+</Text>
      </Pressable>
      <Text style={styles.count}>{count}</Text>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPress}>
        <Text style={styles.buttonContent}>-</Text>
      </Pressable>
    </View>
  );
}
