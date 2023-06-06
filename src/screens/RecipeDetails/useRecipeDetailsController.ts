import { useCallback, useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import * as RecipeDetailsStore from '@stores/recipeDetails';

import {
  NutrientsSection,
  PrescriptionCardSection,
  useNutrientsController,
  usePrescriptionCardController,
} from './hooks';

export const useRecipeDetailsController = () => {
  const { params } =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'RecipeDetails'>>();

  const PrescriptionCard = usePrescriptionCardController();
  const Nutrients = useNutrientsController({
    numberOfServings: PrescriptionCard.servingsCount,
  });

  const { recipe } = RecipeDetailsStore.useRecipeDetailsStore();

  const getRecipe = RecipeDetailsStore.useGetRecipeDetails();
  const resetRecipe = RecipeDetailsStore.useResetRecipeDetails();

  useEffect(() => {
    getRecipe(params.id);

    return () => {
      resetRecipe();
    };
  }, []);

  const onPrescriptionCardSectionChange = useCallback(
    (activeElement: string) => {
      PrescriptionCard.changeSection(activeElement as PrescriptionCardSection);
    },
    [],
  );

  const onNutrientsSectionChange = useCallback(
    (activeElement: string) => {
      Nutrients.changeSection(activeElement as NutrientsSection);
    },
    [],
  );

  return {
    recipe,
    onServingsCountChange: PrescriptionCard.onCountChange,
    onPrescriptionCardSectionChange,
    onNutrientsSectionChange,
    nutrients: Nutrients.nutrients,
    nutrientsActiveSection: Nutrients.activeSection,
    prescriptionCardActiveSection: PrescriptionCard.activeSection,
    servingsCount: PrescriptionCard.servingsCount,
  };
};
