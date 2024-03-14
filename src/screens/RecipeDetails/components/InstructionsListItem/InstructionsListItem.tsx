import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  image?: string;
  description: string;
  count: number;
}

export function InstructionsListItem({
  image,
  description,
  count,
}: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <View style={styles.ingredientsListItemContainer}>
      <FastImage source={Icons.dot} style={styles.listItemDot} />
      <View style={styles.listItemContentContainer}>
        <Text style={styles.listItemCount}>{t('recipeDetails.step')} {count}</Text>
        {image && <FastImage source={{ uri: image }} style={styles.listItemImage} />}
        <Text style={styles.listItemDescription}>{description}</Text>
      </View>
    </View>
  );
}
