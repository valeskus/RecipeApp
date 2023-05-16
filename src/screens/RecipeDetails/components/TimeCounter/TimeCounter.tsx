import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

import {Icons} from '../../../../UI/Icons';

interface Props {
  time: string;
}

export function TimeCounter({time}: Props): JSX.Element {
  return (
    <View style={styles.timeContainer}>
      <Image style={styles.timeIcon} source={Icons.time} />
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}
