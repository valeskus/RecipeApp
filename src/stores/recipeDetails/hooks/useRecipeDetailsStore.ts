import * as Redux from 'react-redux';
import {RootStore} from '../../rootStore';
import {RecipeDetailsStoreState} from '../recipeDetailsReducer';

export const useRecipeDetailsStore = () => {
  return Redux.useSelector<RootStore, RecipeDetailsStoreState>(
    store => store.recipeDetails,
  );
};
