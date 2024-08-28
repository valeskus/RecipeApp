import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './styles';
import { useLanguageScreenController } from './useLanguageScreenController';
import { LanguageItem } from './component/LanguageItem';

export function LanguageScreen(): JSX.Element {
  const { language, onPressUA, onPressEN } = useLanguageScreenController();
  const { t } = useTranslation();

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.label}>{t('screenHeaderTitle.language')} :</Text>
      <LanguageItem title={'Ukrainian'} onPress={onPressUA} language={language} icon={'ua'} />
      <LanguageItem title={'English'} onPress={onPressEN} language={language} icon={'en'} />
    </View>
  );
}
