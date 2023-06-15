import React from 'react';
import { Image, Pressable, SafeAreaView, Text } from 'react-native';

import { Icons } from '../../../../UI/Icons';

import { styles } from './styles';
import { useErrorController } from './useErrorController';

export function Error(): JSX.Element {
  const { onTryAgain } = useErrorController();

  return (
    <SafeAreaView style={styles.errorScreen}>
      <Image source={Icons.error} style={styles.icon} />
      <Text style={styles.title}>Ooops...</Text>
      <Text style={styles.message}>Something went wrong!</Text>
      <Pressable onPress={onTryAgain}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonTitle}>Please, try again!</Text>
      </Pressable>

    </SafeAreaView>
  );
}
