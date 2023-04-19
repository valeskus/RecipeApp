import React from 'react';
import {Text, View, Image} from 'react-native';
import {Icons} from '../Icons';
import {styles} from './styles';

export type Props = {
  title: string;
  description?: string;
  count: string;
};

export function IngredientsListItem({
  title,
  count,
  description,
}: Props): JSX.Element {
  return (
    <View style={styles.ingredientsListItemContainer}>
      <Image source={Icons.dot} style={styles.ingredientsListItemDot} />
      <View style={styles.ingredientsListItemContentContainer}>
        <View style={styles.ingredientsListItemContent}>
          <Text style={styles.ingredientsListItemTitle}>{title}</Text>
          {description && (
            <Text style={styles.ingredientsListItemDescription}>
              {description}
            </Text>
          )}
        </View>
        <Text style={styles.ingredientsListItemCount}>{count}</Text>
      </View>
    </View>
  );
}
