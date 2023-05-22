import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  count: number;
}
export function Counter({count}: Props): JSX.Element {
  return (
    <View style={styles.counterContainer}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonContent}>+</Text>
      </Pressable>
      <Text style={styles.count}>{count}</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonContent}>-</Text>
      </Pressable>
    </View>
  );
}
