import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './styles';
import { useInfoController } from './useInfoController';

export function Info(): JSX.Element {
  const { onPress, link } = useInfoController();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>  {t('info.foodData')}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.text, styles.link]}>
            {link}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>
        <Text style={[styles.text, styles.accent]}>  {t('info.disclaimer')}</Text>
        {t('info.disclaimerText')}</Text>
    </View>
  );
}
