import './Header.style.css';

import { Button } from '../common/Button';

import { useHeaderController } from './useHeaderController';

export function Header(): JSX.Element {
  const { openCategoryForm, openProductForm, openRecipeForm } = useHeaderController();

  return (
    <div className="header-container ">
      <Button title="Category" onClick={openCategoryForm} />
      <Button title="Product" onClick={openProductForm} />
      <Button title="Recipe" onClick={openRecipeForm} />
    </div>
  );
}
