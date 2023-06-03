import { useCallback, useMemo, useState } from 'react';

import * as RecipeDetailsStore from '@stores/recipeDetails';

export enum NutrientsSection {
  '100g' = '100g',
  Serving = 'Serving',
  AllServings = 'AllServings',
}

export const NutrientsUnitLabels = {
  [NutrientsSection['100g']]: '100 g',
  [NutrientsSection.Serving]: '1 Serving',
  [NutrientsSection.AllServings]: 'All amount',
};

const NutrientsSectionMap = {
  [NutrientsSection['100g']]: 'nutrientsFor100g',
  [NutrientsSection.Serving]: 'nutrientsForServing',
  [NutrientsSection.AllServings]: 'nutrientsForAllServing',
};

interface UseNutrientsControllerParams {
  numberOfServings: number;
}

export interface Nutrients {
  kCal: number;
  protein: number;
  fats: number;
  carbs: number;
}

const fallbackNutrients: Nutrients = {
  kCal: 0,
  protein: 0,
  fats: 0,
  carbs: 0,
};

export const useNutrientsController = (params: UseNutrientsControllerParams) => {
  const [activeSection, setActiveSection] = useState(NutrientsSection['100g']);

  const { recipe } = RecipeDetailsStore.useRecipeDetailsStore();

  const nutrientsFor100g = useMemo(() => {
    if (!recipe) {
      return fallbackNutrients;
    }

    return {
      kCal: (recipe.kCal * 100) / recipe.weight,
      protein: (recipe.macroNutrients.protein * 100) / recipe.weight,
      fats: (recipe.macroNutrients.fats * 100) / recipe.weight,
      carbs: (recipe.macroNutrients.carbs * 100) / recipe.weight,
    };
  }, [!!recipe]);

  const nutrientsForServing = useMemo(() => {
    if (!recipe) {
      return fallbackNutrients;
    }

    return {
      kCal: recipe.kCal / recipe.servingsCount,
      protein: recipe.macroNutrients.protein / recipe.servingsCount,
      fats: recipe.macroNutrients.fats / recipe.servingsCount,
      carbs: recipe.macroNutrients.carbs / recipe.servingsCount,
    };
  }, [!!recipe]);

  const nutrientsForAllServing = useMemo(() => {
    if (!recipe) {
      return fallbackNutrients;
    }

    const { numberOfServings } = params;

    return {
      kCal: (recipe.kCal / recipe.servingsCount) * numberOfServings,
      protein:
        (recipe.macroNutrients.protein / recipe.servingsCount) *
        numberOfServings,
      fats:
        (recipe.macroNutrients.fats / recipe.servingsCount) * numberOfServings,
      carbs:
        (recipe.macroNutrients.carbs / recipe.servingsCount) * numberOfServings,
    };
  }, [params.numberOfServings, !!recipe]);

  const changeSection = useCallback((item: NutrientsSection) => {
    setActiveSection(item);
  }, []);

  const nutrients = {
    nutrientsFor100g,
    nutrientsForServing,
    nutrientsForAllServing,
  }[NutrientsSectionMap[activeSection]]!;

  return {
    activeSection,
    changeSection,
    nutrients,
  };
};
