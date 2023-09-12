import { useNavigate } from 'react-router-dom';
import './Header.style.css';

import { Button } from '../common/Button';

export function Header(): JSX.Element {
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

  return (
    <div className="header-container ">
      <Button title="Category" onClick={openCategoryForm} />
      <Button title="Product" onClick={openProductForm} />
      <Button title="Recipe" onClick={openRecipeForm} />
    </div>
  );
}
