import React, {useCallback} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../UI/Button';
import {useNavigation} from '@react-navigation/native';

export function Header(): JSX.Element {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.header}>
      <View style={styles.headerLeftButton}>
        <Button icon="leftArrow" onPress={onGoBack} />
      </View>
      <View style={styles.headerRightButton}>
        <Button icon="like" onPress={() => {}} />
      </View>
    </View>
  );
}
