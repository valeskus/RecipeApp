import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Icons} from '../../../Icons';

export type Props = {
  rating: number;
};

export function Rating({rating}: Props): JSX.Element {
  return (
    <View style={styles.productCardRaitingContainer}>
      <Image
        source={require('../../../../../assets/rating.png')}
        style={styles.productCardRaitingItem}
      />
      <View style={styles.raitingWraper} />
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
    width: '70%',
    flexDirection: 'row',
    marginBottom: 3,
    backgroundColor: 'red',
    position: 'relative',
  },
  raitingWraper: {
    width: '100%',
    height: 20,
    backgroundColor: 'red',
  },
});
