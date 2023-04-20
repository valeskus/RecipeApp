import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {CategoryCard} from '../../UI/CategoryCard';
import * as CategoriesStore from '../../stores/categories';

export function CategoryCards(): JSX.Element {
  const [isLoading, setLoading] = React.useState(false);
  const {categories} = CategoriesStore.useCategoriesStore();

  const getCategories = CategoriesStore.useGetCategories();

  const navigation = useNavigation();

  React.useEffect(() => {
    setLoading(true);

    getCategories().then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  const handlePress = (title: string) => {
    return navigation.navigate('Recipes', title);
  };

  return (
    <View style={styles.categoryCardsContainer}>
      {categories.map(category => {
        return (
          <CategoryCard
            title={category.title}
            onPress={() => handlePress(category.title)}
            image={category.image}
            key={category.id}
          />
        );
      })}
    </View>
  );
}
