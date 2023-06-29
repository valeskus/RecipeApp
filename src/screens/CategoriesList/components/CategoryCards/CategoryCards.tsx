import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';

import { CategoryCard } from '@UI/CategoryCard';

import { CategoryModel } from '../../../../models';

import { useCategoryCardsController } from './useCategoryCardsController';
import { styles } from './styles';

interface RenderItemParams {
  onPress: (categoryTitle: string) => void;
}
interface Props {
  categories: Array<CategoryModel>;
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

const keyExtractor: FlatListProps<CategoryModel>['keyExtractor'] = item =>
  item.id;

export function CategoryCards({ categories }: Props): JSX.Element {
  const { onPress,  data } = useCategoryCardsController(categories);

  const commonProps = {
    style: styles.offset,
    data,
    renderItem: getRenderItem({
      onPress,
    }),
    keyExtractor,
  };

  return (
    <FlatList
      {...commonProps}
      contentContainerStyle={styles.categoryCardsContainer}
      numColumns={2}
    />
  );
}
