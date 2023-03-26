import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Colors} from '../Colors';
import {Icons} from '../Icons';

export type Props = {
  icon: keyof typeof Icons;
  onPress: () => void;
  active?: boolean;
  pressableStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  iconActiveStyle?: StyleProp<ImageStyle>;
};

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
const styles = StyleSheet.create({
  buttonImage: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
    justifyContent: 'center',
    position: 'relative',
  },
  buttonActive: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
  buttonPressed: {
    transform: [{scale: 0.9}],
  },
});
