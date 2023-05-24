import {useCallback, useEffect, useState} from 'react';
import * as RecipeDetailsStore from '../../stores/recipeDetails';
import {RouteProp, useRoute} from '@react-navigation/native';

export const useRecipeDetailsControler = () => {
  const {recipe} = RecipeDetailsStore.useRecipeDetailsStore();

  const [activeSection, setActiveSection] = useState('Ingredients');
  const [servingsCount, setServingsCount] = useState<number | undefined>(
    recipe?.servingsCount,
  );

  const {params} =
    useRoute<RouteProp<ReactNavigation.RootParamList, 'RecipeDetails'>>();

  const getRecipe = RecipeDetailsStore.useGetRecipeDetails();
  const resetRecipe = RecipeDetailsStore.useResetRecipeDetails();

  useEffect(() => {
    getRecipe(params.id);

    return () => {
      resetRecipe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTogglePress = useCallback((activeElement: string) => {
    setActiveSection(activeElement);
  }, []);

  const onCountChange = useCallback((value: number) => {
    setServingsCount(value);
  }, []);

  return {
    recipe,
    onTogglePress,
    activeSection,
    servingsCount,
    onCountChange,
  };
};
