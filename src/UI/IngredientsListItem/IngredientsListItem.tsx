import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors} from '../Colors';
import {Icons} from '../Icons';

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
const styles = StyleSheet.create({
  ingredientsListItemContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 15,
  },
  ingredientsListItemContentContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: Colors.borderTextSecondary,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  ingredientsListItemContent: {
    flexDirection: 'column',
    flex: 1,
  },
  ingredientsListItemTitle: {
    color: Colors.text,
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  ingredientsListItemDescription: {
    color: Colors.borderTextSecondary,
  },
  ingredientsListItemCount: {
    color: Colors.text,
    fontSize: 18,
  },
  ingredientsListItemDot: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
});
