import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useLanguageScreenController } from './useLanguageScreenController';

export function LanguageScreen(): JSX.Element {
    const { language, onPressUA, onPressEN } = useLanguageScreenController();
    const { t } = useTranslation();

    return (
      <View style={styles.modalContainer}>
        <Text style={styles.label}>{t('screenHeaderTitle.language')} :</Text>
        <Button
          icon="ua"
          active={language === 'ua'}
          disabled={language === 'ua'}
          onPress={onPressUA}
          iconStyle={styles.buttonImage}
        />
        <Button
          icon="en"
          active={language === 'en'}
          disabled={language === 'en'}
          onPress={onPressEN}
          iconStyle={styles.buttonImage}
        />
      </View>
    );
}
