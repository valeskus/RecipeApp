import React from 'react';
import { Text, View, Image } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  title: string;
  description?: string;
  amount: string;
  units: string;
}

export function IngredientsListItem({
  title,
  amount,
  description,
  units,
}: Props): JSX.Element {
  return (
    <View style={styles.ingredientsListItemContainer}>
      <Image source={Icons.dot} style={styles.ingredientsListItemDot} />

      <View style={styles.ingredientsListItemContent}>
        <Text style={styles.ingredientsListItemTitle}>{title}</Text>
        {description && (
          <Text style={styles.ingredientsListItemDescription}>
            {description}
          </Text>
        )}
      </View>
      <Text style={styles.ingredientsListItemAmount}>{amount} </Text>
      <Text style={styles.ingredientsListItemAmount}>{units}</Text>
    </View>
  );
}
