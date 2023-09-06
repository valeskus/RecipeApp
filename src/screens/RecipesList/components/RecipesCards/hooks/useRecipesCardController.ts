import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';

import * as SearchStore from '@stores/search';

import { BaseRecipeModel } from '../../../../../models';

export interface UseRecipeCardControllerParams {
  recipes: Array<BaseRecipeModel>;
  gridType: 'linear' | 'grid';
}

export const useRecipeCardController = (
  params: UseRecipeCardControllerParams,
) => {
  const navigation = useNavigation();
  const paginate = SearchStore.usePagination();

  const onPress = (id: string) => {
    navigation.navigate('RecipeDetails', { id });
  };

  const data = useMemo(() => {
    if (params.gridType === 'linear') {
      return params.recipes;
    }

    if (params.recipes.length % 2 === 0) {
      return params.recipes;
    }

    return [
      ...params.recipes,
      {
        id: 'EMPTY',
        title: '',
        kCal: 0,
        time: 0,
        image: '',
      },
    ];
  }, [params.recipes, params.gridType]);

  const onEndReached = useCallback(() => {
    paginate();
  }, [params.recipes]);

  return {
    onPress,
    data,
    onEndReached,
  };
};
