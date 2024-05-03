import React from 'react';
import { View } from 'react-native';

import { Search } from '@components/Search';

import { styles } from './styles';
import { RecipesCards } from './components/RecipesCards';
import { RecipesListControls } from './components/RecipesListControls';
import { useRecipeListController } from './useRecipesListController';
import { RecipesListMessage } from './components/RecipesListMessage';
import { GridListSkeleton, LinearListSkeleton } from './components/RecipeListSkeleton';

export function RecipesList(): JSX.Element {
  const {
    cardType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    total,
    isFilterActive,
    activeSort,
    changeCardType,
    onSearch,
  } = useRecipeListController();

  return (
    <View style={styles.recipesScreenContainer}>
      <View style={styles.searchMenuContainer}>
        <Search onSearch={onSearch} />
        {!isLoading && !isRecipesListEmpty && (
          <RecipesListControls
            onCardTypeChange={changeCardType}
            gridType={cardType}
            isFilterActive={isFilterActive}
            activeSort={activeSort}
          />
        )}
      </View>
      <View style={styles.blurContainer} />
      {isLoading && cardType === 'grid' && <GridListSkeleton />}
      {isLoading && cardType === 'linear' && <LinearListSkeleton />}
      {!isLoading && isRecipesListEmpty && <RecipesListMessage />}
      {!isLoading && <RecipesCards gridType={cardType} recipes={recipes} total={total} />}
    </View>
  );
}
