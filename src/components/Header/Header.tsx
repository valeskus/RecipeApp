import React, { useCallback } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  options: NativeStackNavigationOptions;
  headerRight?: React.ReactNode;
}

export function Header({ options, headerRight }: Props): JSX.Element {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const onPressSetting = useCallback(() => {
    navigation.navigate('Recipes');
  }, []);

  return (
    <View style={styles.headerContainer}>
      {navigation.canGoBack() && (
        <Pressable
          onPress={onGoBack}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Image source={Icons.leftArrow} style={styles.buttonImage} />
        </Pressable>
      )}
      {!navigation.canGoBack() && (
        <Pressable
          onPress={onPressSetting}
          style={({ pressed }) => [
            styles.headerLeftContainer,
            pressed && styles.buttonPressed,
          ]}
        >
          <Image source={Icons.setting} style={styles.buttonImage} />
        </Pressable>)
        }

      <Text style={styles.headerTitle}>{options.title}</Text>
      <View style={styles.headerRightContainer}>{headerRight}</View>
    </View>
  );
}
