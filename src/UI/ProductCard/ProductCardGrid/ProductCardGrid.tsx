import React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';

import { styles } from './styles';

interface Props {
  image: string;
  title: string;
  calories: number;
  time: string;
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
        <Text numberOfLines={1} style={styles.productCardTitle}>
          {title}
        </Text>
        <View style={styles.productCardDetailsItemBox}>
          <Image source={Icons.time} style={styles.icon} />
          <Text style={styles.productCardDetailsItem}>{time}</Text>
        </View>
        <View style={styles.productCardDetailsItemBox}>
          <Image source={Icons.kCal} style={styles.icon} />
          <Text style={styles.productCardDetailsItem} numberOfLines={1}>{calories} kcal</Text>
          <Text style={styles.note}> / 100g</Text>
        </View>
      </View>
    </Pressable>
  );
}
