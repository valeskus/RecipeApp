import React from 'react';
import {FlatList, FlatListProps, ListRenderItem, View} from 'react-native';
import {styles} from './styles';

import {ProductCardGrid} from '../../../../UI/Product Card/ProductCardGrid';
import {ProductCardLine} from '../../../../UI/Product Card/ProductCardLine';
import {BaseRecipeModel} from '../../../../models';
import {UseRecipeCardControlerParams, useRecipeCardControler} from './hooks';

interface Props extends UseRecipeCardControlerParams {}

interface RenderItemParams {
  onPress: (id: string) => void;
  gridType: UseRecipeCardControlerParams['gridType'];
}

const getRenderItem =
  (params: RenderItemParams): ListRenderItem<BaseRecipeModel> =>
  ({item}) => {
    if (item.id === 'EMPTY') {
      return <View style={styles.cardPlaceholder} />;
    }

    return params.gridType === 'grid' ? (
      <ProductCardGrid
        title={item.title}
        rating={item.rating}
        calories={item.kcal}
        time={item.time}
        image={item.image}
        onPress={() => params.onPress(item.id)}
      />
    ) : (
      <ProductCardLine
        title={item.title}
        rating={item.rating}
        calories={item.kcal}
        time={item.time}
        image={item.image}
        onPress={() => params.onPress(item.id)}
      />
    );
  };

const keyExtractor: FlatListProps<BaseRecipeModel>['keyExtractor'] = item =>
  item.id;

export function RecipesCards({gridType, recipes}: Props): JSX.Element {
  const {onPress, data} = useRecipeCardControler({recipes, gridType});

  const commonProps = {
    style: styles.offset,
    data,
    renderItem: getRenderItem({
      onPress,
      gridType,
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
    />
  );
}
