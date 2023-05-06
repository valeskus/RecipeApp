import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';

import {ProductCardGrid} from '../../../../UI/Product Card/ProductCardGrid';
import {ProductCardLine} from '../../../../UI/Product Card/ProductCardLine';
import {BaseRecipeModel} from '../../../../models';
import {useRecipeCardControler} from './hooks';

export type Props = {
  gridType: boolean;
  recipes: Array<BaseRecipeModel>;
};

export function RecipesCards({gridType, recipes}: Props): JSX.Element {
  const {handlePress} = useRecipeCardControler();
  return (
    <ScrollView
      style={styles.offset}
      contentContainerStyle={[
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
    </ScrollView>
  );
}
