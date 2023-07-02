import React from 'react';
import { Image, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  time: number;
}

export function TimeCounter({ time }: Props): JSX.Element {
  return (
    <View style={styles.timeContainer}>
      <Image style={styles.timeIcon} source={Icons.time} />
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}
