import { useNavigate } from 'react-router-dom';

import  './MainPage.style.css';
import { ButtonLink } from '../common/buttons';

export function MainPage(): JSX.Element {
  let navigate = useNavigate();

  return (<div className="mainContainer">
    <ButtonLink title="Category" onClick={() =>
      navigate('/formManager', { state: { formByItem: 'categoryForm', formByArray: 'fileForm' } })
    }
    />
    <ButtonLink title="Product" onClick={() =>
      navigate('/formManager', { state: { formByItem: 'productForm', formByArray: 'fileForm' } })
    }
    />
    <ButtonLink title="Recipe" onClick={() =>
      navigate('/recipeForm')
    }
    />
  </div>);
}
