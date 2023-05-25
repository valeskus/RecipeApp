import React, {useCallback} from 'react';
import {Image, Pressable, SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Icons} from '../../UI/Icons';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  options: NativeStackNavigationOptions;
}

export function Header({options}: HeaderProps): JSX.Element {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={styles.headerContainer}>
      {options.title !== 'Categories' && (
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
    </SafeAreaView>
  );
}
