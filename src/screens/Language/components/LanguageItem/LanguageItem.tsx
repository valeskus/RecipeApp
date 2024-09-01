import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  icon: 'en' | 'ua';
  onPress: () => void;
  title: string;
  isActive: boolean;
}

export function LanguageItem({ icon, isActive, title, onPress }: Props): JSX.Element {

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View style={styles.itemBackground}>
        <Image source={Icons[icon]} style={styles.buttonImage} />
        {isActive && (
          <Image
            source={Icons.active}
            style={styles.iconActive}
          />
        )}
      </View>
      <Text style={[styles.itemTitle, isActive && styles.active]}>{title}</Text>
    </Pressable>
  );
}
