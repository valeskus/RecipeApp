import React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {useRecipeDetailsControler} from './useRecipeDetailsController';
import {Icons} from '../../UI/Icons';
import {Colors} from '../../UI/Colors';
import {Header} from './components/Header';

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
          <Text style={styles.title}>{recipe.title}</Text>
          <View style={styles.timeContainer}>
            <Image style={styles.timeIcon} source={Icons.time} />
            <Text>{recipe.time}</Text>
          </View>

          <Text>{recipe.description}</Text>
          <View>
            <View>
              <Image source={Icons.dot} />
              <Text>{recipe.kcal}</Text>
            </View>
            <View>
              <Image source={Icons.dot} />
              <Text>{recipe.macroNutrients.protein}</Text>
            </View>
            <View>
              <Image source={Icons.dot} />
              <Text>{recipe.macroNutrients.fats}</Text>
            </View>
            <View>
              <Image source={Icons.dot} />
              <Text>{recipe.macroNutrients.carbs}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
