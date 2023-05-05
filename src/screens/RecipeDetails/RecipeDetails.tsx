import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {useRecipeDetailsControler} from './hooks';
import {Icons} from '../../UI/Icons';

export const RecipeDetails: React.FC = () => {
  const {recipe} = useRecipeDetailsControler();

  if (!recipe) {
    // return <Loader />;
    return null;
  }

  return (
    <ScrollView style={styles.detailsScreenContainer}>
      <Image source={{uri: recipe.image}} style={styles.image} />
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
    </ScrollView>
  );
};
