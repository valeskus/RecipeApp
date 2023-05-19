import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Search} from '../../components/Search';
import {RecipesCards} from './components/RecipesCards';
import {RecipesListControls} from './components/RecipesListControls';
import {useRecipeListController} from './useRecipesListController';
import {RecipesListMessage} from './components/RecipesListMessage';
import {RecipeListSkeleton} from './components/RecipeListSkeleton';

export function RecipesList(): JSX.Element {
  const {
    gridType,
    isLoading,
    isRecipesListEmpty,
    recipes,
    onChangeCardType,
    handleSearch,
  } = useRecipeListController();
  return (
    <View style={styles.recipiesScreenContainer}>
      <View style={styles.searchMenuContainer}>
        <Search onSearch={handleSearch} />
        {isLoading && !isRecipesListEmpty && (
          <RecipesListControls
            onCardTypeChange={onChangeCardType}
            gridType={gridType}
          />
        )}
      </View>
      <View style={styles.blurContainer} />
      {!isLoading && <RecipeListSkeleton />}
      {isLoading && isRecipesListEmpty && <RecipesListMessage />}
      {isLoading && <RecipesCards gridType={gridType} recipes={recipes} />}
    </View>
  );
}
