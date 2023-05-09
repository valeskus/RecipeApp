import {useEffect} from 'react';
import * as RecipeDetailsStore from '../../stores/recipeDetails';
import {RouteProp, useRoute} from '@react-navigation/native';

export const useRecipeDetailsControler = () => {
  const {params} =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'RecipeDetails'>>();

  const {recipe} = RecipeDetailsStore.useRecipeDetailsStore();
  const getRecipe = RecipeDetailsStore.useGetRecipeDetails();
  const resetRecipe = RecipeDetailsStore.useResetRecipeDetails();

  useEffect(() => {
    getRecipe(params.id);

    return () => {
      resetRecipe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    recipe,
  };
};
