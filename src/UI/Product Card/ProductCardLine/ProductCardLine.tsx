import React from 'react';
import {Image, Pressable, StyleProp, ViewStyle, Text, View} from 'react-native';
import {styles} from './styles';
import {Rating} from '../components/Rating';

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
      style={({pressed}) => [
        styles.productCardLineContainer,
        pressed && styles.cardPressed,
        pressableStyle,
      ]}>
      <Image source={{uri: image}} style={styles.productCardLineImage} />
      <View style={styles.productCardDetails}>
        <Text style={styles.productCardTitle}>{title}</Text>
        <View style={styles.productCardLineItem}>
          <Rating rating={rating} />
        </View>
        <View style={styles.productCardLineItem}>
          <Text style={styles.productCardLineDetailsItem}>
            Kcal: {calories}
          </Text>
          <Text style={styles.productCardLineDetailsItem}>Time: {time}</Text>
        </View>
      </View>
    </Pressable>
  );
}
