import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {IngredientsListItem} from '../../../../UI/IngredientsListItem';
import {IngredientModel} from '../../../../models';

interface Props {
  ingredients: Array<IngredientModel>;
}

export function IngredientsList({ingredients}: Props): JSX.Element {
  return (
    <View style={styles.ingredientsContainer}>
      {ingredients.map(item => {
        return (
          <IngredientsListItem
            title={item.title}
            description={item.description}
            count={item.count}
            unit={item.unit}
            key={item.id}
          />
        );
      })}
    </View>
  );
}
