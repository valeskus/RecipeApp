import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Icons } from '@UI/Icons';
import { RectangleButton } from '@UI/RectangleButton';

import { Header } from '../Header';

import { styles } from './styles';

interface Props {
  onRetry: () => void;
}

export function Error({ onRetry }: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.errorScreen}>
      <Header/>
      <View style={styles.errorContainer}>
        <Image source={Icons.pizza} style={styles.icon} />
        <Text style={styles.title}>{t('errors.title')}...</Text>
        <Text style={styles.message}>{t('errors.description')}!</Text>
        <RectangleButton onPress={onRetry} text={t('errors.tryAgain')!} />
      </View>
    </SafeAreaView>
  );
}
