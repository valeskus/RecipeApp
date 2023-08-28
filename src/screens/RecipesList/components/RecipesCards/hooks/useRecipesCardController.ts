import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';

import * as SearchStore from '@stores/search';

import { BaseRecipeModel } from '../../../../../models';

export interface UseRecipeCardControllerParams {
  recipes: Array<BaseRecipeModel>;
  gridType: 'linear' | 'grid';
  total: number;
}

export const useRecipeCardController = (
  params: UseRecipeCardControllerParams,
) => {
  const navigation = useNavigation();

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

  const searchOptions = SearchStore.useSearchStore();
  const setSearchOptions = SearchStore.useSetSearchOptions();

  const onSetPageSize = useCallback(() => {
    if (params.recipes.length === 0) {
      return;
    }

    if (params.recipes.length < searchOptions.pageSize || searchOptions.offset > params.total) {
      setSearchOptions({ offset: searchOptions.offset, pageSize: 8 });

      return;
    }

    if (params.recipes.length === params.total) {

      return;
    }

    setSearchOptions({ offset: searchOptions.offset + 8, pageSize: 8 });
  }, [params.recipes, params.recipes.length, searchOptions.offset]);

  return {
    onPress,
    data,
    onSetPageSize,
  };
};
