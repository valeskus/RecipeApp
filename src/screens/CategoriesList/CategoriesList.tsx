import React from 'react';
import {View, StatusBar} from 'react-native';
import {styles} from './styles';
import {CategoryCards} from './components/CategoryCards';
import {Search} from '../../components/Search';
import {useCategoryListControler} from './useCategoryListControler';

export function CategoriesList(): JSX.Element {
  const {handleSearch} = useCategoryListControler();
  return (
    <View style={styles.categoriesScreenContainer}>
      <StatusBar />
      <View style={styles.searchContainer}>
        <Search onSearch={handleSearch} />
      </View>
      <CategoryCards />
    </View>
  );
}
