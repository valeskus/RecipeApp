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
  //   icon: keyof typeof Icons;
  title: string;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
};

export function CategoryCard({
  //   icon,
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
      <Image
        source={require('../../../assets/eda.jpeg')}
        style={styles.categoryCardImage}
      />
      <Text style={styles.categoryCardTitle}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  categoryCardImage: {
    width: '100%',
    flex: 4,
    alignSelf: 'center',
    borderRadius: 20,
  },
  categoryContainer: {
    borderRadius: 20,
    width: 170,
    height: 170,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 3,
  },
  categoryCardTitle: {
    flex: 1,
    marginVertical: 5,
    fontSize: 18,
    color: Colors.primary,
  },

  cardPressed: {
    transform: [{scale: 0.9}],
  },
});
