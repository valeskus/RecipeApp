import React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {useRecipeDetailsControler} from './useRecipeDetailsController';
import {Colors} from '../../UI/Colors';
import {Header} from './components/Header';
import {TimeCounter} from './components/TimeCounter';
import {NutrientsValue} from './components/NutrientsValue';
import {Toggle} from '../../UI/Toggle';
import {IngredientsList} from './components/IngredientsList ';
import {InstructionsList} from './components/InstructionsList';

export function RecipeDetails(): JSX.Element {
  const {recipe, onTogglePress, activeItem} = useRecipeDetailsControler();

  if (!recipe) {
    return <ActivityIndicator color={Colors.primary} />;
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.detailsScreenContainer}>
        <Image source={{uri: recipe.image}} style={styles.image} />

        <View style={styles.contentContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.title}>{recipe.title}</Text>
              <TimeCounter time={recipe.time} />
            </View>
            <Text style={styles.description}>{recipe.description}</Text>
            <NutrientsValue
              kcal={recipe.kcal}
              protein={recipe.macroNutrients.protein}
              fats={recipe.macroNutrients.fats}
              carbs={recipe.macroNutrients.carbs}
            />
            <Toggle
              items={['Ingredients', 'Instructions']}
              activeItem={activeItem}
              onChange={onTogglePress}
            />
          </View>
          {activeItem === 'Ingredients' && (
            <IngredientsList ingredients={recipe.ingredients} />
          )}
          {activeItem === 'Instructions' && (
            <InstructionsList instructions={recipe.instructions} />
          )}
        </View>
      </ScrollView>
    </>
  );
}
