import React from 'react';
import { Text, View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

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
      <Image source={Icons.dot} style={styles.listItemDot} />
      <View style={styles.listItemContentContainer}>
        <Text style={styles.listItemCount}>{t('scope.step')} {count}</Text>
        {image && <Image source={{ uri: image }} style={styles.listItemImage} />}
        <Text style={styles.listItemDescription}>{description}</Text>
      </View>
    </View>
  );
}
