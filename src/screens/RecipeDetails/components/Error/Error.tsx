import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import { Button } from '@UI/Button';
import { Icons } from '@UI/Icons';
import { RectangleButton } from '@UI/RectangleButton';

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
        <RectangleButton onPress={onTryAgain} text="Please, try again!"/>
      </View>

    </SafeAreaView>
  );
}
