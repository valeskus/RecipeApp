import {useEffect, useState} from 'react';
import * as RecipeDetailsStore from '../../../stores/recipeDetails';

export const useRecipeDetailsControler = () => {
  const [isLoading, setLoading] = useState(false);

  //TODO type and isLoading

  const recipe = RecipeDetailsStore.useRecipeDetailsStore();

  useEffect(() => {
    if (!recipe) {
      return setLoading(true);
    }
    return setLoading(false);
  }, [recipe]);

  return {
    recipe,
    isLoading,
  };
};
