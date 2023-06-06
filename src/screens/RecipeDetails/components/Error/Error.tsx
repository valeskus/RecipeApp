import React from 'react';
import {Image, Pressable, SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import {Icons} from '../../../../UI/Icons';

export function Error(): JSX.Element {
  return (
    <SafeAreaView style={styles.errorContainer}>
    <Image source={Icons.errorRecipe} style={styles.icon} />
      <Text style={styles.title}>Ooops...</Text>
      <Text style={styles.message}>Something went wrong!</Text>

      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonTitle}>Please, try again!</Text>
      </Pressable>
    </SafeAreaView>
  );
}
