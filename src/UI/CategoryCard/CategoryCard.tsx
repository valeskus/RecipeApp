import * as React from 'react';
import { Pressable, StyleProp, ViewStyle, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import { styles } from './styles';

interface Props {
  image: string;
  title: string;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
}

export function CategoryCard({
  image,
  title,
  onPress,
  pressableStyle,
}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.categoryContainer,
        pressed && styles.cardPressed,
        pressableStyle,
      ]}
    >
      <FastImage source={{ uri: image }} style={styles.categoryCardImage} />
      <Text style={styles.categoryCardTitle} numberOfLines={3}>{title.trim()}</Text>
    </Pressable>
  );
}
