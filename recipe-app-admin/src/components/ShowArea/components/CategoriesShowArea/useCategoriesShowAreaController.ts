import { useEffect } from 'react';
import * as Redux from 'react-redux';

import { useCategoriesStore, useGetCategories } from '../../../../stores/categories';

export const useCategoriesShowAreaController = () => {

  const getCategories = useGetCategories();

  const { categories } = useCategoriesStore();

  const dispatch = Redux.useDispatch();

  useEffect(() => {
    getCategories(dispatch);
  }, []);

  return {
    categories,
  };
};
