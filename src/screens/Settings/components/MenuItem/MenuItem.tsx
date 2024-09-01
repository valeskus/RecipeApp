import React from 'react';
import { Image, Pressable, Text } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
    icon: keyof typeof Icons;
    title: string;
    onPress: () => void;
}
export function MenuItem({ icon, title, onPress }: Props): JSX.Element {

    return (
      <Pressable style={({ pressed }) => [
            styles.container,
            pressed && styles.pressed,
      ]}
        onPress={onPress}
      >
        <Image source={Icons[icon]} style={styles.icon} />
        <Text style={styles.label}>{title}</Text>
      </Pressable>
    );
}
