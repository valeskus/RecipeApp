import React from 'react';
import {  View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@UI/Button';

import { styles } from './styles';
import { useSettingButtonController } from './useSettingsController';

export function Settings(): JSX.Element {
  const {  isUA, onPressUA, onPressEN } = useSettingButtonController();
  const { bottom } = useSafeAreaInsets();
  const footerOffset = bottom || 20;

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.label}>Language:</Text>
      <Button icon="ua" active={isUA} onPress={onPressUA} iconStyle={styles.buttonImage}/>
      <Button icon="en" active={!isUA} onPress={onPressEN} iconStyle={styles.buttonImage}/>
      <View style={[styles.footerOffset, { height: footerOffset }]} />
    </View>
  );
}
