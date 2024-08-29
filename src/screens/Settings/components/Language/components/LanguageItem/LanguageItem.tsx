import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  icon: keyof typeof Icons;
  language?: 'en' | 'ua';
  onPress: () => void;
  title: string;
}

export function LanguageItem({ icon, language, title, onPress }: Props): JSX.Element {

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View style={styles.itemBackground}>
        <Image source={Icons[icon]} style={styles.buttonImage} />
        {language === icon && (
          <Image
            source={Icons.active}
            style={styles.iconActive}
          />
        )}
      </View>
      <Text style={[styles.itemTitle, language === icon && styles.active]}>{title}</Text>
    </Pressable>
  );
}
