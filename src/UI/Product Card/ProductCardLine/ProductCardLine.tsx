import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../Colors';
import {Rating} from '../components/Rating';

export type Props = {
  image: string;
  title: string;
  calories: string;
  time: string;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
};

export function ProductCardLine({
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
      style={({pressed}) => [
        styles.productCardLineContainer,
        pressed && styles.cardPressed,
        pressableStyle,
      ]}>
      <Image source={{uri: image}} style={styles.productCardLineImage} />
      <View style={styles.productCardDetails}>
        <Text style={styles.productCardTitle}>{title}</Text>
        <View style={styles.productCardLineItem}>
          <Rating rating={4} />
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
const styles = StyleSheet.create({
  productCardLineContainer: {
    borderRadius: 20,
    width: '90%',
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    elevation: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  productCardLineImage: {
    flex: 2,
    height: 120,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  productCardTitle: {
    marginBottom: 2,
    fontSize: 18,
    color: Colors.primary,
    flex: 1,
  },
  productCardDetails: {
    flex: 2,
    padding: 10,
  },
  productCardLineDetailsItem: {
    fontSize: 15,
    color: Colors.text,
    marginRight: 10,
  },
  cardPressed: {
    transform: [{scale: 0.9}],
  },
  productCardLineItem: {
    flexDirection: 'row',
    flex: 1,
  },
});
