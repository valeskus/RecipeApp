import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './styles';
import { MenuItem } from './components/MenuItem';
import { useSettingsController } from './useSettingsController';

export function Settings(): JSX.Element {
  const { onPressLanguage, onPressInfo } = useSettingsController();
  const { t } = useTranslation();

  return (
    <View style={styles.modalContainer}>
      <MenuItem title={t('screenHeaderTitle.language')} icon={'language'} onPress={onPressLanguage} />
      <MenuItem title={t('screenHeaderTitle.info')} icon={'info'} onPress={onPressInfo} />
    </View>
  );
}
