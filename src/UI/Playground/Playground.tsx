import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { CategoriesList } from '../../screens/CategoriesList';

const styles = StyleSheet.create({
  PlaygroundContainer: {
    flex: 1,
    // marginLeft: 10,
  },
});

export const Playground: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.PlaygroundContainer}>
      <CategoriesList />
    </SafeAreaView>
  );
};
