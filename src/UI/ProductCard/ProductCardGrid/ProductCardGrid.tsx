import React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Icons } from '@UI/Icons';
import { TimeCounter } from '@UI/TimeCounter';

import { styles } from './styles';

interface Props {
  image: string;
  title: string;
  calories: number;
  time: number;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
}

export function ProductCardGrid({
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
        styles.productGridContainer,
        pressed && styles.cardPressed,
        pressableStyle,
      ]}
    >
      <Image source={{ uri: image }} style={styles.productCardGridImage} />
      <View style={styles.productCardDetails}>
        <Text numberOfLines={2} style={styles.productCardTitle}>
          {title}
        </Text>
        <View style={styles.productCardDetailsItemContainer}>
          <View style={styles.productCardTimeContainer}>
            <TimeCounter time={time} />
          </View>
          <View style={styles.productCardDetailsItemBox}>
            <Image source={Icons.kCal} style={styles.icon} />
            <Text style={styles.productCardDetailsItem} numberOfLines={1}>{calories} {t('units.kCal')}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
