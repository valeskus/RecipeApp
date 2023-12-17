import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ProductCardLine } from '@UI/ProductCard/ProductCardLine';
import { ProductCardGrid } from '@UI/ProductCard/ProductCardGrid';

import { BaseRecipeModel } from '../../../../models';
import { Loader } from '../Loader';

import { styles } from './styles';
import { UseRecipeCardsControllerParams, useRecipeCardsController } from './useRecipesCardsController';
interface Props extends UseRecipeCardsControllerParams {
  total: number;
}

interface RenderItemParams {
  onPress: (id: string) => void;
  gridType: UseRecipeCardsControllerParams['gridType'];
  caloriesTitle: string;
}

const getRenderItem =
  (params: RenderItemParams) => {
    const Card: ListRenderItem<BaseRecipeModel> = ({ item }) => {
      if (item.id === 'EMPTY') {
        return <View style={styles.cardPlaceholder} />;
      }

      const calories = Math.round((item.kCal * 100) / item.amount);

      return params.gridType === 'grid' ? (
        <ProductCardGrid
          title={item.title}
          calories={calories}
          caloriesTitle={params.caloriesTitle}
          time={item.time}
          image={item.image}
          onPress={() => params.onPress(item.id)}
        />
      ) : (
        <ProductCardLine
          title={item.title}
          calories={calories}
          caloriesTitle={params.caloriesTitle}
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

const CARD_GRID_HEIGHT = 270;
const CARD_LINE_HEIGHT = 130;

const getItemGridLayout = (data: unknown, index: number) =>
({
  length: CARD_GRID_HEIGHT,
  offset: CARD_GRID_HEIGHT * index,
  index,
});
const getItemLineLayout = (data: unknown, index: number) =>
({
  length: CARD_LINE_HEIGHT,
  offset: CARD_LINE_HEIGHT * index,
  index,
});

export function RecipesCards({ gridType, recipes, total }: Props): JSX.Element {
  const { onPress, data, onEndReached } = useRecipeCardsController({ recipes, gridType });

  const { t } = useTranslation();

  const commonProps = {
    style: styles.offset,
    data,
    renderItem: getRenderItem({
      onPress,
      gridType,
      caloriesTitle: t('units.kCal'),
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
        getItemLayout={getItemGridLayout}
        initialNumToRender={8}
        removeClippedSubviews
        windowSize={40}
        maxToRenderPerBatch={10}
        ListFooterComponent={() => (data && recipes.length !== total) ? <Loader /> : null}
      />
    );
  }

  return (
    <FlatList
      {...commonProps}
      key="linear-list"
      getItemLayout={getItemLineLayout}
      removeClippedSubviews
      initialNumToRender={8}
      maxToRenderPerBatch={10}
      windowSize={40}
      contentContainerStyle={[
        styles.recipesCardsContainer,
        styles.centeredLineCard,
      ]}
      ListFooterComponent={() => (data && recipes.length !== total) ? <Loader /> : null}
    />
  );
}
