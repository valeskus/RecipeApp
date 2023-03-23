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
  //   image: keyof typeof Image;
  title: string;
  calories: string;
  time: string;
  onPress: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
};

export function ProductCardGrid({
  //   image,
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
        styles.productGridContainer,
        pressed && styles.cardPressed,
        pressableStyle,
      ]}>
      <Image
        source={require('../../../../assets/zopa.jpg')}
        style={styles.productCardGridImage}
      />
      <View style={styles.productCardDetails}>
        <Text style={styles.productCardTitle}>{title}</Text>
        <Rating rating={2} />
        <Text style={styles.productCardDetailsItem}>Kcal: {calories}</Text>
        <Text style={styles.productCardDetailsItem}>Time: {time}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  productGridContainer: {
    borderRadius: 20,
    width: 170,
    height: 230,
    backgroundColor: Colors.background,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 20,
  },
  productCardGridImage: {
    width: '100%',
    flex: 3,
    alignSelf: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  productCardTitle: {
    marginBottom: 2,
    fontSize: 18,
    color: Colors.primary,
  },
  productCardDetails: {
    flex: 2,
    padding: 10,
  },
  productCardDetailsItem: {
    fontSize: 15,
    color: Colors.text,
  },
  cardPressed: {
    transform: [{scale: 0.9}],
  },
});
