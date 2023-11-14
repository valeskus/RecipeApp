import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';

import { ProductCardLine } from '@UI/ProductCard/ProductCardLine';
import { ProductCardGrid } from '@UI/ProductCard/ProductCardGrid';

import { BaseRecipeModel } from '../../../../models';
import { Loader } from '../Loader';

import { styles } from './styles';
import { UseRecipeCardsControllerParams, useRecipeCardsController } from './useRecipesCardsController';

interface Props extends UseRecipeCardsControllerParams {
  isLoading: boolean;
 }

interface RenderItemParams {
  onPress: (id: string) => void;
  gridType: UseRecipeCardsControllerParams['gridType'];
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

export function RecipesCards({ gridType, recipes, isLoading }: Props): JSX.Element {
  const { onPress, data, onEndReached } = useRecipeCardsController({ recipes, gridType });

  const commonProps = {
    style: styles.offset,
    data,
    renderItem: getRenderItem({
      onPress,
      gridType,
    }),
    keyExtractor,
    onEndReachedThreshold: 0.3,
    onEndReached: onEndReached,
  };

  if (gridType === 'grid') {
    return (
      <FlatList
        {...commonProps}
        contentContainerStyle={styles.recipesCardsContainer}
        numColumns={2}
        key="grid-list"
        ListFooterComponent={() => data && isLoading ? <Loader/> : null}
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
      ListFooterComponent={() => data && isLoading ? <Loader/> : null}
    />
  );
}
