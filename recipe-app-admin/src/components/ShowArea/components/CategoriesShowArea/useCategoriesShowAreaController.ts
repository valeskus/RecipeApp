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

    //TODO logic and endpoint

  }, [categories]);

  const updateImage = useCallback((id: string, newImage: string) => {
    const currentCategory = categories.find((category) => category.id === id);

    if (currentCategory?.image === newImage) {
      return;
    }

    //TODO logic

  }, [categories]);

  return {
    categories,
    updateTitle,
    updateImage,
  };
};
