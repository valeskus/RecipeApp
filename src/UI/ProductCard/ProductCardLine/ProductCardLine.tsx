import React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Icons } from '@UI/Icons';

import { TimeManager } from '@managers/TimeManager';

import { styles } from './styles';

interface Props {
  image: string;
  title: string;
  calories: number;
  time: number;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
}

export function ProductCardLine({
  image,
  title,
  calories,
  time,
  onPress,
  pressableStyle,
}: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.productCardLineContainer,
        pressed && styles.cardPressed,
        pressableStyle,
      ]}
    >
      <Image source={{ uri: image }} style={styles.productCardLineImage} />
      <View style={styles.productCardDetails}>
        <Text numberOfLines={2} style={styles.productCardTitle}>
          {title}
        </Text>
        <View style={styles.productCardDetailsItemBox}>
          <Image source={Icons.time} style={styles.icon} />
          <Text style={styles.productCardLineDetailsItem}>{TimeManager.getHours(time)}</Text>
        </View>
        <View style={styles.productCardDetailsItemBox}>
          <Image source={Icons.kCal} style={styles.icon} />
          <Text style={styles.productCardLineDetailsItem} numberOfLines={1}>{calories} {t('scope.kCal')}</Text>
          <Text style={styles.note}> / 100 {t('scope.g')}</Text>
        </View>
      </View>
    </Pressable>
  );
}
