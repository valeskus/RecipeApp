import {useNavigation} from '@react-navigation/native';

import * as RecipeDetailsStore from '../../../../../stores/recipeDetails';

export const useRecipeCardControler = () => {
  const navigation = useNavigation();
  const getRecipe = RecipeDetailsStore.useGetRecipeDetails();

  const handlePress = (id: string) => {
    getRecipe(id).then(() => {
      return navigation.navigate('RecipeDetails');
    });
  };

  return {
    handlePress,
  };
};
