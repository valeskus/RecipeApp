import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {styles} from './styles';
import {CategoryCard} from '../../../../UI/CategoryCard';
import {useCategoryCardControler} from './hooks/';
import {CategoryModel} from '../../../../models';
import {CategoryListSkeleton} from '../CategoryListSkeleton';

interface RenderItemParams {
  onPress: (categoryTitle: string) => void;
}

const getRenderItem =
  (params: RenderItemParams): ListRenderItem<CategoryModel> =>
  ({item}) => {
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

export function CategoryCards(): JSX.Element {
  const {onPress, isLoading, categories} = useCategoryCardControler();
  return (
    <>
      {isLoading && <CategoryListSkeleton />}
      {!isLoading && (
        <FlatList
          style={styles.offset}
          contentContainerStyle={styles.categoryCardsContainer}
          data={categories}
          renderItem={getRenderItem({onPress})}
          numColumns={2}
        />
      )}
    </>
  );
}
