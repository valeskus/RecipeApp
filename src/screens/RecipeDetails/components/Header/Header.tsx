import React, {useCallback} from 'react';
import {Animated, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../UI/Button';
import {useNavigation} from '@react-navigation/native';

interface Props {
  scrollYRef: any;
}

export function Header({scrollYRef}: Props): JSX.Element {
  const headerOpacity = scrollYRef.current.interpolate({
    inputRange: [190, 280, 310, 350],
    outputRange: [0, 0.2, 0.5, 0.5],
    extrapolateLeft: 'clamp',
  });
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={[styles.header]}>
      <Animated.View style={[styles.headerWraper, {opacity: headerOpacity}]} />
      <View style={styles.headerLeftButton}>
        <Button icon="leftArrow" onPress={onGoBack} />
      </View>
      <View style={styles.headerRightButton}>
        <Button icon="like" onPress={() => {}} />
      </View>
    </View>
  );
}
