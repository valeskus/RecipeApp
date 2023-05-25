import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Icons} from '../../UI/Icons';

interface HeaderProps {
  options: NativeStackNavigationOptions;
}

export function Header({options}: HeaderProps): JSX.Element {
  return (
    <View style={styles.headerContainer}>
      {options.title !== 'Catigories' && (
        <Pressable
          onPress={() => {}}
          style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}>
          <Image source={Icons.leftArrow} style={[styles.buttonImage]} />
        </Pressable>
      )}
      <Text style={styles.headerTitle}>{options.title}</Text>
    </View>
  );
}
