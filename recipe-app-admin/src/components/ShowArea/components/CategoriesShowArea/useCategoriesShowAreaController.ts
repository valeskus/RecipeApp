import { useCallback, useEffect } from 'react';
import * as Redux from 'react-redux';

import { useCategoriesStore, useGetCategories } from '../../../../stores/categories';

export const useCategoriesShowAreaController = () => {

  const getCategories = useGetCategories();

  const { categories } = useCategoriesStore();

  const dispatch = Redux.useDispatch();

  useEffect(() => {
    getCategories(dispatch);
  }, []);

  const updateTitle = useCallback((id: string, newTitle: string) => {
    const currentCategory = categories.find((category) => category.id === id);

    if (currentCategory?.title?.toLocaleLowerCase() === newTitle?.toLocaleLowerCase()) {
      return;
    }

    console.log(currentCategory, newTitle);

  }, [categories]);

  return {
    categories,
    updateTitle,
  };
};
