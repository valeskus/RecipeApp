import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {CategoryCards} from '../../components/CategoryCards';
import {Search} from '../../UI/Search';

export function CategoriesList(): JSX.Element {
  return (
    <ScrollView style={styles.categoriesScreenContainer}>
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
