import React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, Text, View } from 'react-native';

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

export function ProductCardGrid({
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
        <Rating rating={rating} />
        <Text style={styles.productCardDetailsItem}>Kcal: {calories}</Text>
        <Text style={styles.productCardDetailsItem}>Time: {time}</Text>
      </View>
    </Pressable>
  );
}
