import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ImageMock} from '../../UI/ImageMock';
import {ProductCardGrid} from '../../UI/Product Card/ProductCardGrid';
import {ProductCardLine} from '../../UI/Product Card/ProductCardLine';
import * as RecipesStore from '../../stores/recipes';

export type Props = {
  gridType: boolean;
};

export function RecipesCards({gridType}: Props): JSX.Element {
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
  const [isLoading, setLoading] = React.useState(false);
  const [searchData, setSearchData] = React.useState();
  const [sortData, setSortData] = React.useState();
  const [filterData, setFilterData] = React.useState([]);

  const {recipes} = RecipesStore.useRecipesStore();

  const getRecipes = RecipesStore.useGetRecipeList();

  React.useEffect(() => {
    setLoading(true);
    const options = {
      search: searchData,
      sort: sortData,
      filter: filterData,
    };
    getRecipes(options).then(() => {
      setLoading(false);
    });
  }, [searchData, sortData, filterData, getRecipes]);

  return (
    <View
      style={[
        styles.recipesCardsContainer,
        !gridType && styles.centeredLineCard,
      ]}>
      {products.map(product => {
        return gridType ? (
          <ProductCardGrid
            title={product.title}
            rating={product.rating}
            calories={product.calories}
            time={product.time}
            image={product.image}
            key={product.id}
            onPress={() => {}}
          />
        ) : (
          <ProductCardLine
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
