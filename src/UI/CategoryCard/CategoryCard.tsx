import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import {Colors} from '../Colors';

export type Props = {
  image: string;
  title: string;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
};

export function CategoryCard({
  image,
  title,
  onPress,
  pressableStyle,
}: Props): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.categoryContainer,
        pressed && styles.cardPressed,
        pressableStyle,
      ]}>
      <Image source={{uri: image}} style={styles.categoryCardImage} />
      <Text style={styles.categoryCardTitle}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  categoryCardImage: {
    width: '100%',
    height: 130,
    flex: 4,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  categoryContainer: {
    borderRadius: 20,
    width: '40%',
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  categoryCardTitle: {
    flex: 1,
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },

  cardPressed: {
    transform: [{scale: 0.9}],
  },
});
