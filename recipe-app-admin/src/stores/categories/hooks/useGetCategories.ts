import * as React from 'react';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

import { getCategoriesList } from '../categoriesActions';

export const useGetCategories = () => {

  return React.useCallback(async (dispatch: Dispatch<AnyAction>) => {
    await getCategoriesList(dispatch);
  }, []);
};
