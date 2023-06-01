import { useCallback, useEffect,useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import * as RecipeDetailsStore from '@stores/recipeDetails';

import {
  NutrientsSection,
  PrescriptionCardSection,
  useNutrientsController,
  usePrescriptionCardController,
} from './hooks';

export const useRecipeDetailsController = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const {params} =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'RecipeDetails'>>();

  const PrescriptionCard = usePrescriptionCardController();
  const Nutrients = useNutrientsController({
    numberOfServings: PrescriptionCard.servingsCount,
  });

  const { recipe } = RecipeDetailsStore.useRecipeDetailsStore();

  const getRecipe = RecipeDetailsStore.useGetRecipeDetails();
  const resetRecipe = RecipeDetailsStore.useResetRecipeDetails();
  const fetchData = async () => {
    try {
      setLoading(true);

      await getRecipe(params.id);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      setError(false);
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
    isLoading,
    isError,
  };
};
