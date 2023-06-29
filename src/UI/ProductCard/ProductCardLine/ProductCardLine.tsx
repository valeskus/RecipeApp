import React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';

import { Rating } from '../components/Rating';

import { styles } from './styles';

interface Props {
  image: string;
  title: string;
  calories: number;
  time: string;
  rating: number;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
}

export function ProductCardLine({
  image,
  title,
  calories,
  time,
  rating,
  onPress,
  pressableStyle,
}: Props): JSX.Element {
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
        <View style={styles.productCardLineItem}>
          <Rating rating={rating} />
        </View>
        <View style={styles.productCardDetailsItemBox}>
          <Image source={Icons.kCal} style={styles.icon} />
          <Text style={styles.productCardLineDetailsItem}>{calories} kcal</Text>
          <Text style={styles.note}> / 100g</Text>
        </View>
        <View style={styles.productCardDetailsItemBox}>
          <Image source={Icons.time} style={styles.icon} />
          <Text style={styles.productCardLineDetailsItem}>{time}</Text>
        </View>
      </View>
    </Pressable>
  );
}
