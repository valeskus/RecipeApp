import React from 'react';
import { View, StatusBar } from 'react-native';

import { Search } from '@components/Search';

import { styles } from './styles';
import { CategoryCards } from './components/CategoryCards';
import { useCategoryListController } from './useCategoryListController';
import { Error } from './components/Error';

export function CategoriesList(): JSX.Element {
  const { handleSearch, categories, isLoading, isError, fetchData } = useCategoryListController();
  if (isError) {
    return <Error onRetry={fetchData} />;
  }

  return (
    <View style={styles.categoriesScreenContainer}>
      <StatusBar />
      <View style={styles.searchContainer}>
        <Search onSearch={handleSearch} />
      </View>
      <CategoryCards categories={categories} isLoading={isLoading} />
    </View>
  );
}
