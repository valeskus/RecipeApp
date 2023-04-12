import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {CategoryCard} from '../../UI/CategoryCard';
import {ImageMock} from '../../UI/ImageMock';
// import * as CategoriesStore from './stores/categories';

export function CategoryCards(): JSX.Element {
  const categories = [
    {id: 1, title: 'Category 1', image: ImageMock},
    {id: 2, title: 'Category 2', image: ImageMock},
    {id: 3, title: 'Category 3', image: ImageMock},
    {id: 4, title: 'Category 4', image: ImageMock},
    {id: 5, title: 'Category 5', image: ImageMock},
    {id: 6, title: 'Category 6', image: ImageMock},
    {id: 7, title: 'Category 7', image: ImageMock},
    {id: 8, title: 'Category 8', image: ImageMock},
  ];

  // const [isLoading, setLoading] = React.useState(false);

  // const {categories} = CategoriesStore.useCategoriesStore();

  // const getCategories = CategoriesStore.useGetCategories();

  // React.useEffect(() => {
  //   setLoading(true);

  //   getCategories().then(() => {
  //     setLoading(false);
  //   });

  // }, []);

  // if (isLoading) {
  //   return <Loader />
  // }

  return (
    <View style={styles.categoryCardsContainer}>
      {categories.map(category => {
        return (
          <CategoryCard
            title={category.title}
            onPress={() => {}}
            image={category.image}
            key={category.id}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  categoryCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
