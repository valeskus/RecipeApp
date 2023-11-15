import React from 'react';
import { View } from 'react-native';

import { Search } from '@components/Search';

import { styles } from './styles';
import { RecipesCards } from './components/RecipesCards';
import { RecipesListControls } from './components/RecipesListControls';
import { useRecipeListController } from './useRecipesListController';
import { RecipesListMessage } from './components/RecipesListMessage';
import { RecipeListSkeleton } from './components/RecipeListSkeleton';

export function RecipesList(): JSX.Element {
  const {
    gridType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    total,
    isFilterActive,
    isSortActive,
    onChangeCardType,
    resetRecipes,
  } = useRecipeListController();

  return (
    <View style={styles.recipesScreenContainer}>
      <View style={styles.searchMenuContainer}>
        <Search onSearch={resetRecipes} />
        {!isLoading && !isRecipesListEmpty && (
          <RecipesListControls
            onCardTypeChange={onChangeCardType}
            gridType={gridType}
            isFilterActive={isFilterActive}
            isSortActive={isSortActive}
          />
        )}
      </View>
      <View style={styles.blurContainer} />
      {isLoading && <RecipeListSkeleton />}
      {!isLoading && isRecipesListEmpty && <RecipesListMessage />}
      {!isLoading && <RecipesCards gridType={gridType} recipes={recipes} total={total} />}
    </View>
  );
}
