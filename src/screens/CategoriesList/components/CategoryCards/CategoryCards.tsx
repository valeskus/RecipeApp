import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { CategoryCard } from '@UI/CategoryCard';

import { CategoryModel } from '../../../../models';
import { CategoryListSkeleton } from '../CategoryListSkeleton';

import { useCategoryCardController } from './useCategoryCardController';
import { styles } from './styles';

interface Props {
  categories: Array<CategoryModel>;
  isLoading: boolean;
}
interface RenderItemParams {
  onPress: (categoryTitle: string) => void;
}

const getRenderItem =
  (params: RenderItemParams): ListRenderItem<CategoryModel> => {
    const Card: ListRenderItem<CategoryModel> = ({ item }) => {
      if (item.id === 'EMPTY') {
        return <View style={styles.cardPlaceholder} />;
      }

      return (
        <CategoryCard
          title={item.title}
          onPress={() => params.onPress(item.title)}
          image={item.image}
        />
      );
    };

    return Card;
  };

export function CategoryCards({ categories, isLoading }: Props): JSX.Element {
  const { onPress } = useCategoryCardController();

  return (
    <>
      {isLoading && <CategoryListSkeleton />}
      {!isLoading && (
        <FlatList
          style={styles.offset}
          contentContainerStyle={styles.categoryCardsContainer}
          data={categories}
          renderItem={getRenderItem({ onPress })}
          numColumns={2}
        />
      )}
    </>
  );
}
