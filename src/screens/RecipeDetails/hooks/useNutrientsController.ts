import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as RecipeDetailsStore from '@stores/recipeDetails';

export enum NutrientsSection {
  '100g' = '100g',
  Serving = 'Serving',
  AllServings = 'AllServings',
}

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
  const { t } = useTranslation();

  const [activeSection, setActiveSection] = useState(NutrientsSection['100g']);

  const { recipe } = RecipeDetailsStore.useRecipeDetailsStore();

  const NutrientsUnitLabels = {
    [NutrientsSection['100g']]: `100 ${t('units.g')}`,
    [NutrientsSection.Serving]: `1 ${t('recipeDetails.nutrients.serving')}`,
    [NutrientsSection.AllServings]: t('recipeDetails.nutrients.allAmount'),
  };

  const nutrientsFor100g = useMemo(() => {
    if (!recipe) {
      return fallbackNutrients;
    }

    return {
      kCal: recipe.kCalPer100,
      protein: (recipe.macroNutrients.proteins * 100) / recipe.amount,
      fats: (recipe.macroNutrients.fats * 100) / recipe.amount,
      carbs: (recipe.macroNutrients.carbs * 100) / recipe.amount,
    };
  }, [!!recipe]);

  const nutrientsForServing = useMemo(() => {
    if (!recipe) {
      return fallbackNutrients;
    }

    return {
      kCal: recipe.kCal / recipe.servingsCount,
      protein: recipe.macroNutrients.proteins / recipe.servingsCount,
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
        (recipe.macroNutrients.proteins / recipe.servingsCount) * numberOfServings,
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
    NutrientsUnitLabels,
  };
};
