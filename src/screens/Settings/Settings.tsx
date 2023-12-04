import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useSettingButtonController } from './useSettingsController';
import { SettingsSkeleton } from './components/SettingsSkeleton';

export function Settings(): JSX.Element {
  const { language, onPressUA, onPressEN, isLoading } = useSettingButtonController();
  const { t } = useTranslation();

  return (
    <View style={styles.modalContainer}>
      {isLoading && <SettingsSkeleton/>}
      <Text style={styles.label}>{t('settings.language')} :</Text>
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
