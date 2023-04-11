import * as React from 'react';
import * as Redux from 'react-redux';
import {getRecipes} from '../recipesActions';
import {SeachOptions} from '../../../api/recipes.api';

export const useGetRecipeList = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(
    async (options: SeachOptions) => {
      await getRecipes(options, dispatch);
    },
    [dispatch],
  );
};
