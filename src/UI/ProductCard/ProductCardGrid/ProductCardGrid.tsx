import React from 'react';
import { Pressable, StyleProp, ViewStyle, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Icons } from '@UI/Icons';
import { TimeCounter } from '@UI/TimeCounter';

import { styles } from './styles';

interface Props {
  image: string;
  title: string;
  calories: number;
  caloriesTitle: string;
  time: number;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
}

export function ProductCardGrid({
  image,
  title,
  calories,
  caloriesTitle,
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
      <FastImage source={{ uri: image }} style={styles.productCardGridImage} />
      <View style={styles.productCardDetails}>
        <Text numberOfLines={2} style={styles.productCardTitle}>
          {title}
        </Text>
        <View style={styles.productCardDetailsItemContainer}>
          <View style={styles.productCardTimeContainer}>
            <TimeCounter time={time} />
          </View>
          <View style={styles.productCardDetailsItemBox}>
            <FastImage source={Icons.kCal} style={styles.icon} />
            <Text style={styles.productCardDetailsItem} numberOfLines={1}>{calories} {caloriesTitle}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
