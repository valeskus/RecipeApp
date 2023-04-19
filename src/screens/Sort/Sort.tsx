import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../UI/Button';
import {useNavigation} from '@react-navigation/native';
export function Sort(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.sortScreenContainer}>
      <Button icon="cancel" onPress={() => navigation.goBack()} />
    </View>
  );
}
