import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {IngredientsListItem} from '../../../../UI/IngredientsListItem';
import {IngredientModel} from '../../../../models';
import {Counter} from '../../../../UI/Counter';

interface Props {
  ingredients: Array<IngredientModel>;
}

export function IngredientsList({ingredients}: Props): JSX.Element {
  return (
    <View style={styles.ingredientsContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Ingredients</Text>
        <Counter count={2} onPress={() => {}} />
      </View>
      <Text style={styles.itemsCounter}>{ingredients.length} items</Text>

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
