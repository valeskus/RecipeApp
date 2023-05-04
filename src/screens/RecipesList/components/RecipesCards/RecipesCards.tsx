import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

import {ProductCardGrid} from '../../../../UI/Product Card/ProductCardGrid';
import {ProductCardLine} from '../../../../UI/Product Card/ProductCardLine';
import {BaseRecipeModel} from '../../../../models';

export type Props = {
  gridType: boolean;
  recipes: Array<BaseRecipeModel>;
};

export function RecipesCards({gridType, recipes}: Props): JSX.Element {
  const navigation = useNavigation();

  const handlePress = (id: string) => {
    return navigation.navigate('RecipeDetails', {id});
  };

  return (
    <View
      style={[
        styles.recipesCardsContainer,
        !gridType && styles.centeredLineCard,
      ]}>
      {recipes.map(recipe => {
        return gridType ? (
          <ProductCardGrid
            title={recipe.title}
            rating={recipe.rating}
            calories={recipe.kcal}
            time={recipe.time}
            image={recipe.image}
            key={recipe.id}
            onPress={() => handlePress(recipe.id)}
          />
        ) : (
          <ProductCardLine
            title={recipe.title}
            rating={recipe.rating}
            calories={recipe.kcal}
            time={recipe.time}
            image={recipe.image}
            key={recipe.id}
            onPress={() => handlePress(recipe.id)}
          />
        );
      })}
    </View>
  );
}
