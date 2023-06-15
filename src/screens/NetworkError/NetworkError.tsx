import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';

import { Icons } from '../../UI/Icons';
import { Button } from '../../UI/Button';

import { styles } from './styles';
import { useErrorController } from './useErrorController';

export function NetworkError(): JSX.Element {
  const { onTryAgain } = useErrorController();

  return (
    <View style={styles.errorScreen}>
      <Image source={Icons.error} style={styles.icon} />
      <Text style={styles.title}>Network Error!</Text>
      <Text style={styles.message}>Please,check your network conection!</Text>
      <Pressable onPress={onTryAgain}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonTitle}>Try again</Text>
      </Pressable>

    </View>
  );
}
