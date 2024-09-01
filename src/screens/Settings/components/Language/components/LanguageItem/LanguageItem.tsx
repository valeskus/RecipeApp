import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  languageCode: 'en' | 'ua';
  language: 'en' | 'ua' | undefined;
  onPress: () => void;
  title: string;
}

export function LanguageItem({ languageCode, language, title, onPress }: Props): JSX.Element {

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View style={styles.itemBackground}>
        <Image source={Icons[languageCode]} style={styles.buttonImage} />
        {language === languageCode && (
          <Image
            source={Icons.active}
            style={styles.iconActive}
          />
        )}
      </View>
      <Text style={[styles.itemTitle, language === languageCode && styles.active]}>{title}</Text>
    </Pressable>
  );
}
