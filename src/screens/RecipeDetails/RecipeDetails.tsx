import React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {useRecipeDetailsControler} from './useRecipeDetailsController';
import {Colors} from '../../UI/Colors';
import {Header} from './components/Header';
import {TimeCounter} from './components/TimeCounter';
import {NutrientsValue} from './components/NutrientsValue';

export function RecipeDetails(): JSX.Element {
  const {recipe} = useRecipeDetailsControler();

  if (!recipe) {
    return <ActivityIndicator color={Colors.primary} />;
  }

  return (
    <ScrollView style={styles.detailsScreenContainer}>
      <Header />
      <Image source={{uri: recipe.image}} style={styles.image} />

      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>{recipe.title}</Text>
            <TimeCounter time={recipe.time} />
          </View>

          <Text>{recipe.description}</Text>
          <NutrientsValue
            kcal={recipe.kcal}
            protein={recipe.macroNutrients.protein}
            fats={recipe.macroNutrients.fats}
            carbs={recipe.macroNutrients.carbs}
          />
        </View>
      </View>
    </ScrollView>
  );
}
