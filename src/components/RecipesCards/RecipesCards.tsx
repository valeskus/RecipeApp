import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ImageMock} from '../../UI/ImageMock';
import {ProductCardGrid} from '../../UI/Product Card/ProductCardGrid';
import {ProductCardLine} from '../../UI/Product Card/ProductCardLine';

export type Props = {
  cardType: string;
};

export function RecipesCards({cardType}: Props): JSX.Element {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: ImageMock,
      rating: 4,
      calories: 500,
      time: '1:50',
    },
    {
      id: 2,
      title: 'Product 2',
      image: ImageMock,
      rating: 3,
      calories: 500,
      time: '1:50',
    },
    {
      id: 3,
      title: 'Product 3',
      image: ImageMock,
      rating: 1,
      calories: 500,
      time: '1:50',
    },
    {
      id: 4,
      title: 'Product 4',
      image: ImageMock,
      rating: 4.5,
      calories: 500,
      time: '1:50',
    },
    {
      id: 5,
      title: 'Product 5',
      image: ImageMock,
      rating: 1.5,
      calories: 500,
      time: '1:50',
    },
  ];

  return (
    <View
      style={[
        styles.recipesCardsContainer,
        cardType === 'line' && styles.centeredLineCard,
      ]}>
      {products.map(product => {
        return cardType === 'line' ? (
          <ProductCardLine
            title={product.title}
            rating={product.rating}
            calories={product.calories}
            time={product.time}
            image={product.image}
            key={product.id}
            onPress={() => {}}
          />
        ) : (
          <ProductCardGrid
            title={product.title}
            rating={product.rating}
            calories={product.calories}
            time={product.time}
            image={product.image}
            key={product.id}
            onPress={() => {}}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  recipesCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  centeredLineCard: {
    justifyContent: 'center',
  },
});
