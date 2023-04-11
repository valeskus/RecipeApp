import * as Redux from 'react-redux';
import {RootStore} from '../../rootStore';
import {recipeDetailsStoreState} from '../recipeDetailsReducer';

export const useRecipeDetailsStore = () => {
  return Redux.useSelector<RootStore, recipeDetailsStoreState>(
    store => store.recipeDetails,
  );
};
