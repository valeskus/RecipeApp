import * as React from 'react';
import * as Redux from 'react-redux';
import {getRecipes} from '../recipesActions';
import {SeachOptions} from '../../../api/recipes.api';

//TODO options type
export const useGetRecipeList = (options: SeachOptions) => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(async () => {
    await getRecipes(dispatch, options);
  }, [dispatch, options]);
};
