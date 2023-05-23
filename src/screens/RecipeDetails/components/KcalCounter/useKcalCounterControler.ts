import {useCallback, useState} from 'react';
import {DetailRecipeModel} from '../../../../models';

export const useKcalCounterControler = (recipe: DetailRecipeModel) => {
  const [activeKcalItem, setActiveKcalItem] = useState('100g');

  const onTogglePress = useCallback((activeElement: string) => {
    setActiveKcalItem(activeElement);
  }, []);

  const onCount = useCallback(() => {
    switch (activeKcalItem) {
      case '1 serving':
        return {
          kcal: Math.round(recipe.kcal / recipe.servingsCount),
          protein: Math.round(
            recipe.macroNutrients.protein / recipe.servingsCount,
          ),
          fats: Math.round(recipe.macroNutrients.fats / recipe.servingsCount),
          carbs: Math.round(recipe.macroNutrients.carbs / recipe.servingsCount),
        };
      case 'all amount':
        return {
          kcal: Math.round(recipe.kcal * recipe.servingsCount),
          protein: Math.round(
            recipe.macroNutrients.protein * recipe.servingsCount,
          ),
          fats: Math.round(recipe.macroNutrients.fats * recipe.servingsCount),
          carbs: Math.round(recipe.macroNutrients.carbs * recipe.servingsCount),
        };
      default:
        return {
          kcal: recipe.kcal,
          protein: recipe.macroNutrients.protein,
          fats: recipe.macroNutrients.fats,
          carbs: recipe.macroNutrients.carbs,
        };
    }
  }, [recipe, activeKcalItem]);
  return {
    activeKcalItem,
    onTogglePress,
    onCount,
  };
};
