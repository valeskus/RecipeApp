import React from 'react';
import { Image, SafeAreaView, Text } from 'react-native';

import { RectangleButton } from '@UI/RectangleButton';

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
      <RectangleButton onPress={onTryAgain} text="Please, try again!"/>
    </SafeAreaView>
  );
}
