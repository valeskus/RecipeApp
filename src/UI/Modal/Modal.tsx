import React, {useCallback} from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../UI/Button';
import {Icons} from '../Icons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  children: JSX.Element;
  title: string;
  onSelectPress: () => void;
  onCleanPress: () => void;
}

export function Modal({
  children,
  title,
  onSelectPress,
  onCleanPress,
}: Props): JSX.Element {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.modalContainer}>
      <SafeAreaView style={styles.headerContainer}>
        <Pressable
          onPress={onGoBack}
          style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}>
          <Image source={Icons.leftArrow} style={[styles.buttonImage]} />
        </Pressable>

        <Text style={styles.headerTitle}>{title}</Text>
        <Button icon="clean" onPress={onCleanPress} />
        {/* <Pressable
        onPress={onGoBack}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Image source={Icons.clean} style={[styles.buttonImage]} />
      </Pressable> */}
      </SafeAreaView>
      {children}
      <View style={styles.wrapper} />
      <View style={styles.selectButtonContainer}>
        <Button icon="select" onPress={onSelectPress} />
      </View>
    </View>
  );
}
