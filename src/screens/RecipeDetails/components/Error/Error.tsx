import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';
import { RectangleButton } from '@UI/RectangleButton';

import { Header } from '../Header';

import { styles } from './styles';

interface Props {
  onRetry: () => void;
}

export function Error({ onRetry }: Props): JSX.Element {
  return (
    <SafeAreaView style={styles.errorScreen}>
      <Header isError={true} />
      <View style={styles.errorContainer}>
        <Image source={Icons.errorRecipe} style={styles.icon} />
        <Text style={styles.title}>Ooops...</Text>
        <Text style={styles.message}>Something went wrong!</Text>
        <RectangleButton onPress={onRetry} text="Please, try again!" />
      </View>

    </SafeAreaView>
  );
}
