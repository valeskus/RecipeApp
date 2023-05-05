import {useNavigation} from '@react-navigation/native';

export const useRecipeCardControler = () => {
  const navigation = useNavigation();

  const handlePress = (id: string) => {
    navigation.navigate('RecipeDetails', {id});
  };

  return {
    handlePress,
  };
};
