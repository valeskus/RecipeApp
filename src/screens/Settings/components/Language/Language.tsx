import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { LanguageSkeleton } from './components/LanguageSkeleton';
import { styles } from './styles';
import { useLanguageController } from './useLanguageController';
import { LanguageItem } from './components/LanguageItem';

export function Language(): JSX.Element {
  const { language, onPressUA, onPressEN, isLoading } = useLanguageController();
  const { t } = useTranslation();

  return (
    <View style={styles.modalContainer}>
      {isLoading && <LanguageSkeleton />}
      {!isLoading &&
        (<><Text style={styles.label}>{t('screenHeaderTitle.language')} :</Text>
          <LanguageItem title={'Ukrainian'} onPress={onPressUA} language={language} icon={'ua'} />
          <LanguageItem title={'English'} onPress={onPressEN} language={language} icon={'en'} />
        </>)}
    </View>
  );
}
