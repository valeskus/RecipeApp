import * as React from 'react';
import * as Redux from 'react-redux';

import { CategoryPostModel } from '../../../models';
import { addCategory } from '../categoriesActions';

export const useAddCategory = () => {
  const dispatch = Redux.useDispatch();

  return React.useCallback(async (category: CategoryPostModel) => {
    await addCategory(category, dispatch);
  }, [dispatch]);
};
