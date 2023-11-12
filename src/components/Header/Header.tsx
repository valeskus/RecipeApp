import React, { useCallback } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  options: NativeStackNavigationOptions;
  headerRight?: React.ReactNode;
  headerLeft?: React.ReactNode;
  seasonAnimate?: React.ReactNode;
}

export function Header({ options, headerRight, headerLeft, seasonAnimate }: Props): JSX.Element {
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <SafeAreaView style={styles.headerContainer}>
      {!headerLeft && (
        <Pressable
          onPress={onGoBack}
          style={({ pressed }) => [
            styles.leftButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Image source={Icons.leftArrow} style={styles.buttonImage} />
        </Pressable>
      )}
      {headerLeft && <View style={styles.leftButton}>{headerLeft}</View>}
      <Text style={styles.headerTitle}>{options.title}
      </Text>
      <View style={styles.headerRightContainer}>{headerRight}
      </View>
      {seasonAnimate && <View style={styles.snowflakesContainer}>{seasonAnimate}</View>}
    </SafeAreaView>
  );
}
