import React from 'react';

import {styles} from './styles';
import {Image, Pressable} from 'react-native';
import {Icons} from '../../../../UI/Icons';

interface Props {}

export function ClearButton({}: Props): JSX.Element {
  return (
    <Pressable
      onPress={() => {}}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Image source={Icons.clean} style={[styles.buttonImage]} />
    </Pressable>
  );
}
