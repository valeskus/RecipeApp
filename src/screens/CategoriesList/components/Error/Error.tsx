import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { RectangleButton } from '@UI/RectangleButton';
import { Icons } from '@UI//Icons';

import { styles } from './styles';

interface Props {
  onRetry: () => void;
}

export function Error({ onRetry }: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <View style={styles.errorScreen}>
      <Image source={Icons.error} style={styles.icon} />
      <Text style={styles.title}>{t('errors.title')}...</Text>
      <Text style={styles.message}>{t('errors.description')}!</Text>
      <RectangleButton onPress={onRetry} text={t('errors.tryAgain')} />
    </View>
  );
}
