import * as React from 'react';
import * as Redux from 'react-redux';
import {getRecipeById} from '../recipeDetailsActions';

export const useGetRecipeById = (id: string) => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(async () => {
    await getRecipeById(dispatch, id);
  }, [dispatch, id]);
};
