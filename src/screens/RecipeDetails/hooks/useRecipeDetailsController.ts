import {useEffect, useState} from 'react';
import * as RecipeDetailsStore from '../../../stores/recipeDetails';
import {RouteProp, useRoute} from '@react-navigation/native';

export const useRecipeDetailsControler = () => {
  const {params} =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'RecipeDetails'>>();

  const {recipe} = RecipeDetailsStore.useRecipeDetailsStore();
  const getRecipe = RecipeDetailsStore.useGetRecipeDetails();

  useEffect(() => {
    getRecipe(params.id);

    return () => {
      // TODO: clear receipe details action
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    recipe,
  };
};
