import {useCallback, useEffect} from 'react';
import * as RecipeDetailsStore from '../../stores/recipeDetails';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  NutrientsSection,
  PrescriptionCardSection,
  useNutrientsContoller,
  usePrescriptionCardController,
} from './hooks';

export const useRecipeDetailsControler = () => {
  const {params} =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'RecipeDetails'>>();

  const PrescriptionCard = usePrescriptionCardController();
  const Nutrients = useNutrientsContoller({
    numberOfServings: PrescriptionCard.servingsCount,
  });

  const {recipe} = RecipeDetailsStore.useRecipeDetailsStore();

  const getRecipe = RecipeDetailsStore.useGetRecipeDetails();
  const resetRecipe = RecipeDetailsStore.useResetRecipeDetails();

  useEffect(() => {
    getRecipe(params.id);

    return () => {
      resetRecipe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPrescriptionCardSectionChange = useCallback(
    (activeElement: string) => {
      PrescriptionCard.changeSection(activeElement as PrescriptionCardSection);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onNutrientsSectionChange = useCallback(
    (activeElement: string) => {
      Nutrients.changeSection(activeElement as NutrientsSection);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
