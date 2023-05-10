import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Icons} from '../../../Icons';

interface Props {
  rating: number;
}
export function Rating({rating}: Props): JSX.Element {
  const colorWidth = rating > 5 || rating < 0 ? 0 : rating * 20;

  return (
    <View style={styles.productCardRaitingContainer}>
      <Image source={Icons.rating} style={styles.productCardRaitingItem} />
      <View style={[styles.raitingWraper, {width: colorWidth}]} />
    </View>
  );
}
