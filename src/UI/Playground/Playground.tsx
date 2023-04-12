import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {CategoriesList} from '../../screens/CategoriesList';

export const Playground: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.PlaygroundContainer}>
      <CategoriesList />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  PlaygroundContainer: {
    flex: 1,
    // marginLeft: 10,
  },
});
