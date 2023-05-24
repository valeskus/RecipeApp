import {useCallback, useState} from 'react';
import {DetailRecipeModel} from '../../../../models';

export const useKcalCounterControler = (
  recipe: DetailRecipeModel,
  count: number,
) => {
  const [activeKcalItem, setActiveKcalItem] = useState('100g');

  const onTogglePress = useCallback((activeElement: string) => {
    setActiveKcalItem(activeElement);
  }, []);

  const onCount = useCallback(() => {
    switch (activeKcalItem) {
      case '100g':
        return {
          kcal: ((recipe.kcal * 100) / recipe.weight).toFixed(1),
          protein: (
            (recipe.macroNutrients.protein * 100) /
            recipe.weight
          ).toFixed(1),
          fats: ((recipe.macroNutrients.fats * 100) / recipe.weight).toFixed(1),
          carbs: ((recipe.macroNutrients.carbs * 100) / recipe.weight).toFixed(
            1,
          ),
        };

      case '1 serving':
        return {
          kcal: (recipe.kcal / recipe.servingsCount).toFixed(1),
          protein: (
            recipe.macroNutrients.protein / recipe.servingsCount
          ).toFixed(1),
          fats: (recipe.macroNutrients.fats / recipe.servingsCount).toFixed(1),
          carbs: (recipe.macroNutrients.carbs / recipe.servingsCount).toFixed(
            1,
          ),
        };
      case 'all amount':
        return {
          kcal: ((recipe.kcal / recipe.servingsCount) * count).toFixed(1),
          protein: (
            (recipe.macroNutrients.protein / recipe.servingsCount) *
            count
          ).toFixed(1),
          fats: (
            (recipe.macroNutrients.fats / recipe.servingsCount) *
            count
          ).toFixed(1),
          carbs: (
            (recipe.macroNutrients.carbs / recipe.servingsCount) *
            count
          ).toFixed(1),
        };
      default:
        return {
          kcal: recipe.kcal,
          protein: recipe.macroNutrients.protein,
          fats: recipe.macroNutrients.fats,
          carbs: recipe.macroNutrients.carbs,
        };
    }
  }, [recipe, activeKcalItem, count]);
  return {
    activeKcalItem,
    onTogglePress,
    onCount,
  };
};
