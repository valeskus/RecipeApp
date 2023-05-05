import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {CategoryCard} from '../../../../UI/CategoryCard';
import {useCategoryCardControler} from './hooks/';

export function CategoryCards(): JSX.Element {
  const {handlePress, isLoading, categories} = useCategoryCardControler();
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
