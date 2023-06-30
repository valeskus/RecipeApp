import React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, Text, View } from 'react-native';

import { Icons } from '@UI/Icons';

// import { Rating } from '../components/Rating';

import { styles } from './styles';

interface Props {
  image: string;
  title: string;
  calories: number;
  time: string;
  // rating: number;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
}

export function ProductCardGrid({
  image,
  title,
  calories,
  time,
  // rating,
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
        {/* <Rating rating={rating} /> */}
        <View style={styles.productCardDetailsItemBox}>
          <Image source={Icons.kCal} style={styles.icon} />
          <Text style={styles.productCardDetailsItem}>{calories} kcal</Text>
          <Text style={styles.note}> / 100g</Text>
        </View>
        <View style={styles.productCardDetailsItemBox}>
          <Image source={Icons.time} style={styles.icon} />
          <Text style={styles.productCardDetailsItem}>{time}</Text>
        </View>
      </View>
    </Pressable>
  );
}
