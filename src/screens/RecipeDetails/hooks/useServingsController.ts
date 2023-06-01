import {useCallback, useEffect, useState} from 'react';

import * as RecipeDetailsStore from '../../../stores/recipeDetails';

export const useServingsController = () => {
  const {recipe} = RecipeDetailsStore.useRecipeDetailsStore();

  const [servingsCount, setServingsCount] = useState(0);

  useEffect(() => {
    if (recipe) {
      setServingsCount(recipe.servingsCount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!recipe]);

  const onCountChange = useCallback((value: number) => {
    setServingsCount(value);
  }, []);

  return {
    servingsCount,
    onCountChange,
  };
};
