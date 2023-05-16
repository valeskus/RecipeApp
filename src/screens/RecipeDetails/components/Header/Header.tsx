import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../UI/Button';

export function Header(): JSX.Element {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeftButton}>
        <Button icon="leftArrow" onPress={() => {}} />
      </View>
      <View style={styles.headerRightButton}>
        <Button icon="like" onPress={() => {}} />
      </View>
    </View>
  );
}
