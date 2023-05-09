import React from 'react';
import {ActivityIndicator, View, StatusBar, Text} from 'react-native';
import {styles} from './styles';
import {Search} from '../../components/Search';
import {RecipesCards} from './components/RecipesCards';
import {ButtonBar} from './components/ButtonBar';
import {Colors} from '../../UI/Colors';
import {useRecipeListController} from './hooks';

export function RecipesList(): JSX.Element {
  const {
    gridType,
    isLoading,
    isRecipes,
    recipes,
    onChangeCardType,
    handleSearch,
  } = useRecipeListController();
  return (
    <View style={styles.recipiesScreenContainer}>
      <StatusBar />
      <View style={styles.searchMenuContainer}>
        <Search onSearch={handleSearch} />
        {isRecipes && (
          <ButtonBar onCardTypeChange={onChangeCardType} gridType={gridType} />
        )}
      </View>
      <View style={styles.blurContainer} />
      {isLoading && (
        <ActivityIndicator
          color={Colors.primary}
          style={styles.loadingIndicator}
        />
      )}
      {!isRecipes && (
        <View style={styles.textMessageContainer}>
          <Text style={[styles.textMessage, styles.textMessageAccent]}>
            0 results found for your search.
          </Text>
          <Text style={[styles.textMessage]}>
            Please try another search term
          </Text>
        </View>
      )}
      {!isLoading && <RecipesCards gridType={gridType} recipes={recipes} />}
    </View>
  );
}
