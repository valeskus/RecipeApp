import React from 'react';
import {Image, Pressable, StyleProp, ViewStyle, ImageStyle} from 'react-native';
import {styles} from './styles';
import {Icons} from '../Icons';

interface Props {
  icon: keyof typeof Icons;
  onPress: () => any;
  active?: boolean;
  pressableStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  iconActiveStyle?: StyleProp<ImageStyle>;
}

export function Button({
  icon,
  onPress,
  active,
  pressableStyle,
  iconStyle,
  iconActiveStyle,
}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed,
        pressableStyle,
      ]}>
      <Image source={Icons[icon]} style={[styles.buttonImage, iconStyle]} />
      {active && (
        <Image
          source={Icons.active}
          style={[styles.buttonActive, iconActiveStyle]}
        />
      )}
    </Pressable>
  );
}
