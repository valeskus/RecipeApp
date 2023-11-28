import React, { useCallback } from 'react';
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

      return params.gridType === 'grid' ? (
        <ProductCardGrid
          title={item.title}
          calories={item.kCal}
          caloriesTitle={params.caloriesTitle}
          time={item.time}
          image={item.image}
          onPress={() => params.onPress(item.id)}
        />
      ) : (
        <ProductCardLine
          title={item.title}
          calories={item.kCal}
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

export function RecipesCards({ gridType, recipes, total }: Props): JSX.Element {
  const { onPress, dataArray, onEndReached } = useRecipeCardsController({ recipes, gridType });

  const { t } = useTranslation();

  const getItemLayout = useCallback((data: ArrayLike<BaseRecipeModel> | null | undefined, index: number) =>
  ({
    length: 280,
    offset: 280 * index,
    index,
  })
    , []);

  const commonProps = {
    style: styles.offset,
    data: dataArray,
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
        maxToRenderPerBatch={10}
        {...commonProps}
        contentContainerStyle={styles.recipesCardsContainer}
        numColumns={2}
        key="grid-list"
        getItemLayout={getItemLayout}
        ListFooterComponent={() => (dataArray && recipes.length !== total) ? <Loader /> : null}
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
      ListFooterComponent={() => (dataArray && recipes.length !== total) ? <Loader /> : null}
    />
  );
}
