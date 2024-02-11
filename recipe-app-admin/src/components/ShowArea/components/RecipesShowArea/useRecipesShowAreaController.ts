import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import { useGetRecipes, useRecipesSearchStore } from '../../../../stores/recipes';
import { useCategoriesStore } from '../../../../stores/categories';

export const useRecipesShowAreaController = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getRecipes = useGetRecipes();
  const { recipesData } = useRecipesSearchStore();
  const { categories } = useCategoriesStore();

  const dispatch = Redux.useDispatch();

  useEffect(() => {
    getRecipes(searchTerm, dispatch);
  }, [searchTerm]);

  const handleSearchTerm = useCallback((newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  }, []);

  return {
    recipes: recipesData.recipes,
    total: recipesData.total,
    handleSearchTerm,
    categories,
  };
};
