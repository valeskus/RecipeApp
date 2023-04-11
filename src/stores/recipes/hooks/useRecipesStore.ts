import * as Redux from 'react-redux';
import {RecipesStoreState} from '../recipesReducer';
import {RootStore} from '../../rootStore';

export const useRecipesStore = () => {
  return Redux.useSelector<RootStore, RecipesStoreState>(
    store => store.recipes,
  );
};
