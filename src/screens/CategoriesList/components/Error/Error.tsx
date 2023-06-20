import React from 'react';
import { Image, Text, View } from 'react-native';

import { RectangleButton } from '@UI/RectangleButton';
import { Icons } from '@UI//Icons';

import { styles } from './styles';

interface Props {
  onRetry: () => void;
}

export function Error({ onRetry }: Props): JSX.Element {

  return (
    <View style={styles.errorScreen}>
      <Image source={Icons.error} style={styles.icon} />
      <Text style={styles.title}>Ooops...</Text>
      <Text style={styles.message}>Something went wrong!</Text>
      <RectangleButton onPress={onRetry} text="Please, try again!"/>
    </View>
  );
}
