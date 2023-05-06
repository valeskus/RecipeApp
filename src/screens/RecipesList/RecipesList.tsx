import React from 'react';
import {ActivityIndicator, View, StatusBar} from 'react-native';
import {styles} from './styles';
import {Search} from '../../components/Search';
import {RecipesCards} from './components/RecipesCards';
import {ButtonBar} from './components/ButtonBar';
import {Colors} from '../../UI/Colors';
import {useRecipeListController} from './hooks';

export function RecipesList(): JSX.Element {
  const {gridType, isLoading, recipes, onChangeCardType, handleSearch} =
    useRecipeListController();

  return (
    <View style={styles.recipiesScreenContainer}>
      <StatusBar />
      <View style={styles.searchMenuContainer}>
        <Search onSearch={handleSearch} />
        <ButtonBar onCardTypeChange={onChangeCardType} gridType={gridType} />
      </View>
      <View style={styles.blurContainer} />
      {isLoading && (
        <ActivityIndicator
          color={Colors.primary}
          style={styles.loadingIndicator}
        />
      )}
      {!isLoading && <RecipesCards gridType={gridType} recipes={recipes} />}
    </View>
  );
}
