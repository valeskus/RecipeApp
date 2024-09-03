import React from 'react';
import { Image, View } from 'react-native';

import { Icons } from '../../../Icons';

import { styles } from './styles';

interface Props {
  rating: number;
}
export function Rating({ rating }: Props): JSX.Element {
  const colorWidth = rating > 5 || rating < 0 ? 0 : rating * 20;

  return (
    <View style={styles.productCardRatingContainer}>
      <Image source={Icons.rating} style={styles.productCardRatingItem} />
      <View style={[styles.ratingWrapper, { width: colorWidth }]} />
    </View>
  );
}
