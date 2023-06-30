import * as React from 'react';
import { Image, Pressable, StyleProp, ViewStyle, Text } from 'react-native';

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
      <Image source={{ uri: image }} style={styles.categoryCardImage} />
      <Text style={styles.categoryCardTitle} numberOfLines={2}>{title}</Text>
    </Pressable>
  );
}
