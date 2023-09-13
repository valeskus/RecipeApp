import { useNavigate } from 'react-router-dom';

export const useHeaderController = () => {
  let navigate = useNavigate();

  const openCategoryForm = () => {
    return navigate('/categoryForm');
  };

  const openProductForm = () => {
    return navigate('/productForm');
  };

  const openRecipeForm = () => {
    return navigate('/recipeForm');
  };

  return {
    openCategoryForm,
    openProductForm,
    openRecipeForm,
  };
};
