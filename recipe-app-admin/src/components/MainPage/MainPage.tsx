import { useNavigate } from 'react-router-dom';

import  './MainPage.style.css';
import { ButtonLink } from '../common/buttons';

export function MainPage(): JSX.Element {
  let navigate = useNavigate();

  return (<div className="mainContainer">
    <ButtonLink title="Category" onClick={() =>
      navigate('/categoryForm')
    }
    />
    <ButtonLink title="Product" onClick={() =>
      navigate('/productForm')
    }
    />
    <ButtonLink title="Recipe" onClick={() =>
      navigate('/recipeForm')
    }
    />
    <ButtonLink title="File" onClick={() =>
      navigate('/fileForm')
    }
    />
  </div>);
}
