import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

import {ImageMock} from '../../UI/ImageMock';
import {ProductCardGrid} from '../../UI/Product Card/ProductCardGrid';
import {ProductCardLine} from '../../UI/Product Card/ProductCardLine';
import * as RecipesStore from '../../stores/recipes';

export type Props = {
  gridType: boolean;
  categoryTitle?: string;
};

export function RecipesCards({gridType, categoryTitle}: Props): JSX.Element {
  const recipes = [
    {
      id: '1',
      title: 'Product 1',
      image: ImageMock,
      rating: 4,
      calories: 500,
      time: '1:50',
    },
    {
      id: '2',
      title: 'Product 2',
      image: ImageMock,
      rating: 3,
      calories: 500,
      time: '1:50',
    },
    {
      id: '3',
      title: 'Product 3',
      image: ImageMock,
      rating: 1,
      calories: 500,
      time: '1:50',
    },
    {
      id: '4',
      title: 'Product 4',
      image: ImageMock,
      rating: 4.5,
      calories: 500,
      time: '1:50',
    },
    {
      id: '5',
      title: 'Product 5',
      image: ImageMock,
      rating: 1.5,
      calories: 500,
      time: '1:50',
    },
  ];
  const [isLoading, setLoading] = React.useState(false);
  const [searchData, setSearchData] = React.useState(categoryTitle);
  const [sortData, setSortData] = React.useState();
  const [filterData, setFilterData] = React.useState([]);

  const navigation = useNavigation();

  // const {recipes} = RecipesStore.useRecipesStore();

  const getRecipes = RecipesStore.useGetRecipeList();

  React.useEffect(() => {
    setLoading(true);
    const options = {
      search: searchData,
      sort: sortData,
      filter: filterData,
    };
    //TODO options and states
    getRecipes(options).then(() => {
      setLoading(false);
    });
  }, [searchData, sortData, filterData, getRecipes]);

  const handlePress = (id: string) => {
    return navigation.navigate('RecipeDetails', {id});
  };

  return (
    <View
      style={[
        styles.recipesCardsContainer,
        !gridType && styles.centeredLineCard,
      ]}>
      {recipes.map(recipe => {
        return gridType ? (
          <ProductCardGrid
            title={recipe.title}
            rating={recipe.rating}
            calories={recipe.calories}
            time={recipe.time}
            image={recipe.image}
            key={recipe.id}
            onPress={() => handlePress(recipe.id)}
          />
        ) : (
          <ProductCardLine
            title={recipe.title}
            rating={recipe.rating}
            calories={recipe.calories}
            time={recipe.time}
            image={recipe.image}
            key={recipe.id}
            onPress={() => handlePress(recipe.id)}
          />
        );
      })}
    </View>
  );
}
