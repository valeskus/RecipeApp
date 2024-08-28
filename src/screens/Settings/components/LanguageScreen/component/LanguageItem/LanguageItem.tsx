import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '@UI/Button';
import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
    icon: keyof typeof Icons;
    language: 'en' | 'ua' | undefined;
    onPress: () => any;
    title: string;
}

export function LanguageItem({ icon, language, title, onPress }: Props): JSX.Element {

    return (
      <View style={styles.item}>
        <Button
          icon={icon}
          active={language === icon}
          disabled={language === icon}
          onPress={onPress}
          iconStyle={styles.buttonImage}
        />
        <Text style={[styles.itemTitle, language === icon && styles.active]}>{title}</Text>
      </View>
    );
}
