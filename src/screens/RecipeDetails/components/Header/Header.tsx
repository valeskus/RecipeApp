import React, { useCallback } from 'react';
import { Animated, View, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@UI/Button';

import { styles } from './styles';
interface Props {
  scrollYRef?: any;
}

export function Header({ scrollYRef }: Props): JSX.Element {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const headerOpacity = scrollYRef?.current?.interpolate({
    inputRange: [190, 280, 310, 350],
    outputRange: [0, 0.2, 0.5, 0.5],
    extrapolateLeft: 'clamp',
  }) || 0.2;

  return (
    <SafeAreaView style={styles.header}>
      <Animated.View style={[styles.headerWrapper, { opacity: headerOpacity }]} />
      <View style={[styles.headerLeftButton, { marginTop: StatusBar.currentHeight }]}>
        <Button icon="leftArrow" onPress={onGoBack} />
      </View>
    </SafeAreaView>
  );
}
