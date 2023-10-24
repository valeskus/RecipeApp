import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const setIngredientCount = useCallback(
    (count: number) => {
      return (count * servingCount).toFixed(1);
    },
    [servingCount],
  );

  return (
    <View style={styles.ingredientsContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('scope.ingredients')}</Text>
      </View>
      <Text style={styles.itemsCounter}>{ingredients.length} {t('scope.items')}</Text>

      {ingredients.map((item, index) => {
        return (
          <IngredientsListItem
            title={item.title}
            amount={setIngredientCount(item.amount)}
            units={item.units}
            key={index}
          />
        );
      })}
    </View>
  );
}
