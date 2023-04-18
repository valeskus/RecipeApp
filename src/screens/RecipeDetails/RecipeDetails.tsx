import React from 'react';
import {StyleSheet, View} from 'react-native';

export function RecipeDetails(): JSX.Element {
  return <View style={styles.detailsScreenContainer} />;
}
const styles = StyleSheet.create({
  detailsScreenContainer: {
    flex: 1,
    padding: 10,
  },
});
