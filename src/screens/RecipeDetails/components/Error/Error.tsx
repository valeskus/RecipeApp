import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';
import { RectangleButton } from '@UI/RectangleButton';

import { Header } from '../Header';

import { styles } from './styles';
import { useErrorController } from './useErrorController';

export function Error(): JSX.Element {
  const { onTryAgain } = useErrorController();

  return (
    <SafeAreaView style={styles.errorScreen}>
      <Header isError={true} />
      <View style={styles.errorContainer}>
        <Image source={Icons.errorRecipe} style={styles.icon} />
        <Text style={styles.title}>Ooops...</Text>
        <Text style={styles.message}>Something went wrong!</Text>
        <RectangleButton onPress={onTryAgain} text="Please, try again!"/>
      </View>

    </SafeAreaView>
  );
}
