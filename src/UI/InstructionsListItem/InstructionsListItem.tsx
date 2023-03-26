import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors} from '../Colors';
import {Icons} from '../Icons';

export type Props = {
  image?: string;
  description: string;
  count: number;
};

export function InstructionListItem({
  image,
  description,
  count,
}: Props): JSX.Element {
  return (
    <View style={styles.ingredientsListItemContainer}>
      <Image source={Icons.dot} style={styles.listItemDot} />
      <View style={styles.listItemContentContainer}>
        <Text style={styles.listItemCount}>Step {count}</Text>
        {image && <Image source={{uri: image}} style={styles.listItemImage} />}
        <Text style={styles.listItemDescription}>{description}</Text>
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
  listItemContentContainer: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: Colors.borderTextSecondary,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  listItemCount: {
    color: Colors.text,
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  listItemDescription: {
    color: Colors.text,
    marginBottom: 15,
    width: '100%',
  },
  listItemDot: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
    tintColor: Colors.primary,
  },
  listItemImage: {
    width: '70%',
    height: 150,
    marginBottom: 15,
    borderRadius: 10,
  },
});
