import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';

import { Icons } from '../../../../UI/Icons';
import { Button } from '../../../../UI/Button';

import { styles } from './styles';
import { useErrorController } from './useErrorController';

export function Error(): JSX.Element {
  const { onGoBack, onTryAgain } = useErrorController();

  return (
    <SafeAreaView style={styles.errorScreen}>
      <View style={styles.headerButton}>
        <Button icon="leftArrow" onPress={onGoBack} />
      </View>
      <View style={styles.errorContainer}>
        <Image source={Icons.errorRecipe} style={styles.icon} />
        <Text style={styles.title}>Ooops...</Text>
        <Text style={styles.message}>Something went wrong!</Text>
        <Pressable onPress={onTryAgain}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.buttonTitle}>Please, try again!</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}
