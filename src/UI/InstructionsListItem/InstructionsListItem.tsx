import React from 'react';
import {Text, View, Image} from 'react-native';
import {Icons} from '../Icons';
import {styles} from './styles';

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
