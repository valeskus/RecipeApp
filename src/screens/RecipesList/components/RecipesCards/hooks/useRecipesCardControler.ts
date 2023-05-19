import {useNavigation} from '@react-navigation/native';
import {BaseRecipeModel} from '../../../../../models';
import {useMemo} from 'react';

export interface UseRecipeCardControlerParams {
  recipes: Array<BaseRecipeModel>;
  gridType: 'linear' | 'grid';
}

export const useRecipeCardControler = (
  params: UseRecipeCardControlerParams,
) => {
  const navigation = useNavigation();

  const onPress = (id: string) => {
    navigation.navigate('RecipeDetails', {id});
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
        kcal: 0,
        time: '',
        rating: 0,
        image: '',
      },
    ];
  }, [params.recipes, params.gridType]);

  return {
    onPress,
    data,
  };
};
