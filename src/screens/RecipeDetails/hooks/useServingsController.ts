import { useCallback, useEffect, useState } from 'react';

import * as RecipeDetailsStore from '@stores/recipeDetails';

import { EventService } from '@services/EventService';

export const useServingsController = () => {
  const { recipe } = RecipeDetailsStore.useRecipeDetailsStore();

  const [servingsCount, setServingsCount] = useState(0);

  useEffect(() => {
    if (recipe) {
      setServingsCount(recipe.servingsCount);
    }
  }, [!!recipe]);

  const onCountChange = useCallback((value: number) => {
    setServingsCount(value);
    EventService.emit('action:recipe-details:servings-count-change', value);
  }, []);

  return {
    servingsCount,
    onCountChange,
  };
};
