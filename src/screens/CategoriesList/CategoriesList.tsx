import React from 'react';
import { View } from 'react-native';

import { Search } from '@components/Search';

import { styles } from './styles';
import { CategoryCards } from './components/CategoryCards';
import { useCategoryListController } from './useCategoryListController';
import { CategoryListSkeleton } from './components/CategoryListSkeleton';

export function CategoriesList(): JSX.Element {
  const { handleSearch, categories, isLoading } = useCategoryListController();

  return (
    <View style={styles.categoriesScreenContainer}>
      <View style={styles.searchContainer}>
        <Search onSearch={handleSearch} />
      </View>
      {isLoading && <CategoryListSkeleton />}
      {!isLoading && <CategoryCards categories={categories} />}
    </View>
  );
}
