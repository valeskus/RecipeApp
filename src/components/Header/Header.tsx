import React, {useCallback} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Icons} from '../../UI/Icons';
import {useNavigation} from '@react-navigation/native';
interface Props {
  options: NativeStackNavigationOptions;
  headerRight?: React.ReactNode;
}

export function Header({options, headerRight}: Props): JSX.Element {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.headerContainer}>
      {navigation.canGoBack() && (
        <Pressable
          onPress={onGoBack}
          style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}>
          <Image source={Icons.leftArrow} style={[styles.buttonImage]} />
        </Pressable>
      )}
      <Text style={styles.headerTitle}>{options.title}</Text>
      <View style={styles.headerRightContinaer}>{headerRight}</View>
    </View>
  );
}
