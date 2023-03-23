import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../../../Colors';
import {Icons} from '../../../Icons';

export type Props = {
  rating: number;
};
export function Rating({rating}: Props): JSX.Element {
  const colorWidth = rating * 20;

  return (
    <View style={styles.productCardRaitingContainer}>
      <Image source={Icons.rating} style={styles.productCardRaitingItem} />
      <View style={[styles.raitingWraper, {width: colorWidth}]} />
    </View>
  );
}
const styles = StyleSheet.create({
  productCardRaitingItem: {
    width: '100%',
    height: 20,
    position: 'absolute',
    zIndex: 10,
  },
  productCardRaitingContainer: {
    width: 100,
    flexDirection: 'row',
    marginBottom: 3,
    backgroundColor: Colors.tertiary,
    position: 'relative',
  },
  raitingWraper: {
    height: 20,
    backgroundColor: Colors.rating,
  },
});
