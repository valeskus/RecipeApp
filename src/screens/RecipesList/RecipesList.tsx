import React from 'react';
import {ActivityIndicator, ScrollView, StatusBar} from 'react-native';
import {styles} from './styles';
import {Search} from '../../UI/Search';
import {RecipesCards} from './components/RecipesCards';
import {ButtonBar} from './components/ButtonBar';
import {Colors} from '../../UI/Colors';
import {useRecipeListController} from './hooks';

export function RecipesList(): JSX.Element {
  const {gridType, isLoading, recipesList, onChangeCardType, onSearch} =
    useRecipeListController();

  return (
    <ScrollView style={styles.recipiesScreenContainer}>
      <StatusBar />
      <Search onSearch={onSearch} />
      <ButtonBar onCardTypeChange={onChangeCardType} gridType={gridType} />
      {isLoading && (
        <ActivityIndicator
          color={Colors.primary}
          style={styles.loadingIndicator}
        />
      )}
      {!isLoading && <RecipesCards gridType={gridType} recipes={recipesList} />}
    </ScrollView>
  );
}