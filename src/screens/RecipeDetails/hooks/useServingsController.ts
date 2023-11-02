import { useCallback, useEffect, useState } from 'react';

import * as RecipeDetailsStore from '@stores/recipeDetails';

export const useServingsController = () => {
  const { recipe } = RecipeDetailsStore.useRecipeDetailsStore();

  const [servingsCount, setServingsCount] = useState(0);

  useEffect(() => {
    if (recipe) {
      setServingsCount(recipe.servingsCount);
    }
  }, [!!recipe]);

  const onCountChange = useCallback((value: number) => {
    if (value === 0 && recipe) {
      return setServingsCount(recipe.servingsCount);
    }

    setServingsCount(value);
  }, [recipe]);

  return {
    servingsCount,
    onCountChange,
  };
};
