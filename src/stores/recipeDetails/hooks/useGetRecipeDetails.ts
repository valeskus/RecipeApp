import * as React from 'react';
import * as Redux from 'react-redux';
import {getRecipeDetails} from '../recipeDetailsActions';

export const useGetRecipeDetails = (id: string) => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(async () => {
    await getRecipeDetails(dispatch, id);
  }, [dispatch, id]);
};
