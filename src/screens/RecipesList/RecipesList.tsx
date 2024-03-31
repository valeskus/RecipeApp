import React from 'react';
import { View } from 'react-native';

import { Search } from '@components/Search';
import { Error } from '@components/Error';

import { styles } from './styles';
import { RecipesCards } from './components/RecipesCards';
import { RecipesListControls } from './components/RecipesListControls';
import { useRecipeListController } from './useRecipesListController';
import { RecipesListMessage } from './components/RecipesListMessage';
import { GridListSkeleton, LinearListSkeleton } from './components/RecipeListSkeleton';

export function RecipesList(): JSX.Element {
  const {
    recipeCardType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    total,
    isFilterActive,
    activeSort,
    setCardType,
    onSearch,
    isError,
    onRetry,
  } = useRecipeListController();

  return (
    <View style={styles.recipesScreenContainer}>
      <View style={styles.searchMenuContainer}>
        <Search onSearch={onSearch} />
        {!isLoading && !isRecipesListEmpty && !isError && (
          <RecipesListControls
            onCardTypeChange={setCardType}
            gridType={recipeCardType}
            isFilterActive={isFilterActive}
            activeSort={activeSort}
          />
        )}
      </View>
      <View style={styles.blurContainer} />
      {isError && !isLoading && <Error onRetry={onRetry} />}
      {isLoading && recipeCardType === 'grid' && <GridListSkeleton />}
      {isLoading && recipeCardType === 'linear' && <LinearListSkeleton />}
      {!isLoading && !isError && isRecipesListEmpty && <RecipesListMessage />}
      {!isLoading && !isError && <RecipesCards gridType={recipeCardType} recipes={recipes} total={total} />}
    </View>
  );
}
