import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

export function RecipesListMessage(): JSX.Element {

  const { t } = useTranslation();

  return (
    <View style={styles.textMessageContainer}>
      <Image source={Icons.errorRecipe} style={styles.icon} />
      <Text style={[styles.textMessage, styles.textMessageAccent]}>
        {t('errors.recipes.errorMessage')}
      </Text>
      <Text style={styles.textMessage}>{t('errors.recipes.tryAnother')}</Text>
    </View>
  );
}
