import * as React from 'react';
import * as Redux from 'react-redux';

import { getCategories } from '../categoriesActions';

export const useGetCategories = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(async () => {
    await getCategories(dispatch);
  }, [dispatch]);
};
