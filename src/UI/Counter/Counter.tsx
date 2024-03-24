import React from 'react';
import { View, Pressable, Text, TextInput } from 'react-native';

import { styles } from './styles';
import {
  UseCounterControllerParams,
  useCounterController,
} from './useCounterController';

interface Props extends UseCounterControllerParams { }

export function Counter(props: Props): JSX.Element {
  const { onMinusPress, onPlusPress,
    onSubmitPress,
    countValue,
    handleChange,
    searchInputRef,
  } = useCounterController(props);

  return (
    <View style={styles.counterContainer}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onMinusPress}
        hitSlop={17}
      >
        <Text style={[styles.buttonContent, styles.minus]}>–</Text>
      </Pressable>
      <TextInput
        onChangeText={handleChange}
        ref={searchInputRef}
        style={styles.countInput}
        onSubmitEditing={onSubmitPress}
        onEndEditing={onSubmitPress}
        value={countValue}
        maxLength={2}
        inputMode={'numeric'}
        returnKeyType={'done'}
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPlusPress}
        hitSlop={17}
      >
        <Text style={styles.buttonContent}>&#65291;</Text>
      </Pressable>
    </View>
  );
}
