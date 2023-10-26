import { useCallback, useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import * as RecipeDetailsStore from '@stores/recipeDetails';
import * as ErrorsStore from '@stores/errors';

import {
  NutrientsSection,
  PrescriptionCardSection,
  useNutrientsController,
  usePrescriptionCardController,
} from './hooks';

export const useRecipeDetailsController = () => {
  const [isLoading, setLoading] = useState(false);

  const { params } =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'RecipeDetails'>>();

  const PrescriptionCard = usePrescriptionCardController();
  const Nutrients = useNutrientsController({
    numberOfServings: PrescriptionCard.servingsCount,
  });

  const { recipe } = RecipeDetailsStore.useRecipeDetailsStore();
  const errorGetRecipeDetails = ErrorsStore.useGetErrorFor('getRecipeDetails');
  const getRecipe = RecipeDetailsStore.useGetRecipeDetails();
  const resetRecipe = RecipeDetailsStore.useResetRecipeDetails();
  const resetError = ErrorsStore.useResetErrors('getRecipeDetails');
  const { t } = useTranslation();

  const fetchData = useCallback(async () => {
    setLoading(true);

    if (errorGetRecipeDetails) {
      resetError();
    }

    await getRecipe(params.id);

    setLoading(false);
  }, [params.id, errorGetRecipeDetails]);

  useEffect(() => {
    fetchData();

    return () => {
      resetRecipe();
      resetError();
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

  const nutritionLabelsMap = Object.keys(Nutrients.NutrientsUnitLabels).map(id => ({
    id,
    label: (Nutrients.NutrientsUnitLabels as any)[id],
  }));

  return {
    recipe,
    onServingsCountChange: PrescriptionCard.onCountChange,
    onPrescriptionCardSectionChange,
    onNutrientsSectionChange,
    nutrients: Nutrients.nutrients,
    nutrientsActiveSection: Nutrients.activeSection,
    prescriptionCardActiveSection: PrescriptionCard.activeSection,
    servingsCount: PrescriptionCard.servingsCount,
    isLoading,
    isError: !!errorGetRecipeDetails,
    fetchData,
    nutritionLabelsMap,
    t,
  };
};
