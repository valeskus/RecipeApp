import React from 'react';
import {ScrollView, StyleSheet, StatusBar} from 'react-native';
import {CategoryCards} from '../../components/CategoryCards';
import {Search} from '../../UI/Search';

export function CategoriesList(): JSX.Element {
  // TODO : search category or open all recipe list? How to open recipe list by category?
  return (
    <ScrollView style={styles.categoriesScreenContainer}>
      <StatusBar />
      <Search onSearch={() => {}} />
      <CategoryCards />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  categoriesScreenContainer: {
    flex: 1,
  },
});
