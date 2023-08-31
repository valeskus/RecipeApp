import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';

import { ProductCardLine } from '@UI/ProductCard/ProductCardLine';
import { ProductCardGrid } from '@UI/ProductCard/ProductCardGrid';

import { BaseRecipeModel } from '../../../../models';

import { styles } from './styles';
import { UseRecipeCardControllerParams, useRecipeCardController } from './hooks';

interface Props extends UseRecipeCardControllerParams { }

interface RenderItemParams {
  onPress: (id: string) => void;
  gridType: UseRecipeCardControllerParams['gridType'];
  total: number;
}

const getRenderItem =
  (params: RenderItemParams) => {
    const Card: ListRenderItem<BaseRecipeModel> = ({ item }) => {
      if (item.id === 'EMPTY') {
        return <View style={styles.cardPlaceholder} />;
      }

      return params.gridType === 'grid' ? (
        <ProductCardGrid
          title={item.title}
          calories={item.kCal}
          time={item.time}
          image={item.image}
          onPress={() => params.onPress(item.id)}
        />
      ) : (
        <ProductCardLine
          title={item.title}
          calories={item.kCal}
          time={item.time}
          image={item.image}
          onPress={() => params.onPress(item.id)}
        />
      );
    };

    return Card;
  };

const keyExtractor: FlatListProps<BaseRecipeModel>['keyExtractor'] = item =>
  item.id;

export function RecipesCards({ gridType, recipes, total }: Props): JSX.Element {
  const { onPress, data, onEndReached } = useRecipeCardController({ recipes, gridType, total });

  const commonProps = {
    style: styles.offset,
    data,
    renderItem: getRenderItem({
      onPress,
      gridType,
      total,
    }),
    keyExtractor,
  };

  if (gridType === 'grid') {
    return (
      <FlatList
        {...commonProps}
        contentContainerStyle={styles.recipesCardsContainer}
        numColumns={2}
        key="grid-list"
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
      />
    );
  }

  return (
    <FlatList
      {...commonProps}
      key="linear-list"
      contentContainerStyle={[
        styles.recipesCardsContainer,
        styles.centeredLineCard,
      ]}
      onEndReachedThreshold={0.3}
      onEndReached={onEndReached}
    />
  );
}
