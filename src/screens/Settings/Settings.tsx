import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useSettingButtonController } from './useSettingsController';

export function Settings(): JSX.Element {
  const { language, onPressUA, onPressEN } = useSettingButtonController();

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.label}>Language:</Text>
      <Button icon="ua" active={language === 'ua'} onPress={onPressUA} iconStyle={styles.buttonImage} />
      <Button icon="en" active={language === 'en'} onPress={onPressEN} iconStyle={styles.buttonImage} />
    </View>
  );
}
