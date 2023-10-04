import { useNavigate } from 'react-router-dom';

import  './MainPage.style.css';
import { ButtonLink } from '../common/ButtonLink';

export function MainPage(): JSX.Element {
  let navigate = useNavigate();

  return (<div className="mainContainer">
    <ButtonLink title="Category" onClick={() =>
      navigate('/formManager', { state: { formByItem: 'categoryForm', formByArray: 'recipeForm' } })
    }
    />
    <ButtonLink title="Product" onClick={() =>
      navigate('/formManager', { state: { formByItem: 'productForm', formByArray: 'recipeForm' } })
    }
    />
    <ButtonLink title="Recipe" onClick={() =>
      navigate('/formManager', { state: { formByItem: 'recipeForm', formByArray: 'recipeForm' } })
    }
    />
  </div>);
}
