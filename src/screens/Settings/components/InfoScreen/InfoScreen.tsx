import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './styles';

export function InfoScreen(): JSX.Element {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>  {t('info.foodData')}</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.usda.gov')}>
          <Text style={[styles.text, styles.link]}>
            https://www.usda.gov
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>
        <Text style={[styles.text, styles.accent]}>  {t('info.disclaimer')}</Text>
        {t('info.disclaimerText')}</Text>
    </View>
  );
}
