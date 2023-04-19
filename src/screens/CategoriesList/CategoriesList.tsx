import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {styles} from './styles';
import {CategoryCards} from '../../components/CategoryCards';
import {Search} from '../../UI/Search';

export function CategoriesList(): JSX.Element {
  return (
    <ScrollView style={styles.categoriesScreenContainer}>
      <StatusBar />
      <Search onSearch={() => {}} />
      <CategoryCards />
    </ScrollView>
  );
}
