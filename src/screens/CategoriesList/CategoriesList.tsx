import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {styles} from './styles';
import {CategoryCards} from './components/CategoryCards';
import {Search} from '../../components/Search';
import {useCategoryListControler} from './hooks';

export function CategoriesList(): JSX.Element {
  const {handleSearch} = useCategoryListControler();
  return (
    <ScrollView style={styles.categoriesScreenContainer}>
      <StatusBar />
      <Search onSearch={handleSearch} />
      <CategoryCards />
    </ScrollView>
  );
}
