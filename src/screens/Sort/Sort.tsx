import React from 'react';
import {StyleSheet, View} from 'react-native';

export function Sort(): JSX.Element {
  return <View style={styles.sortScreenContainer} />;
}
const styles = StyleSheet.create({
  sortScreenContainer: {
    flex: 1,
    padding: 10,
  },
});
