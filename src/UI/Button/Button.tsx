import React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, ImageStyle } from 'react-native';

import { Icons } from '../Icons';

import { styles } from './styles';

interface Props {
  icon: keyof typeof Icons;
  onPress: () => any;
  active?: boolean;
  pressableStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  iconActiveStyle?: StyleProp<ImageStyle>;
  disabled?: boolean;
}

export function Button({
  icon,
  onPress,
  active,
  pressableStyle,
  iconStyle,
  iconActiveStyle,
  disabled,
}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        pressableStyle,
      ]}
      disabled={disabled}
    >
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
