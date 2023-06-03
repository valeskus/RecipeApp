import React, { useCallback } from 'react';
import { Text, View } from 'react-native';

import { IngredientModel } from '../../../../models';
import { IngredientsListItem } from '../IngredientsListItem';

import { styles } from './styles';

interface Props {
  ingredients: Array<IngredientModel>;
  servingCount: number;
}

export function IngredientsList({
  ingredients,
  servingCount,
}: Props): JSX.Element {
  const setIngredientCount = useCallback(
    (count: number) => {
      return (count * servingCount).toFixed(1);
    },
    [servingCount],
  );

  return (
    <View style={styles.ingredientsContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Ingredients</Text>
      </View>
      <Text style={styles.itemsCounter}>{ingredients.length} items</Text>

      {ingredients.map(item => {
        return (
          <IngredientsListItem
            title={item.title}
            description={item.description}
            count={setIngredientCount(item.count)}
            unit={item.unit}
            key={item.id}
          />
        );
      })}
    </View>
  );
}
