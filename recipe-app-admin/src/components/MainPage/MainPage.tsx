import { useNavigate } from 'react-router-dom';

import  './MainPage.style.css';
import { ButtonLink } from '../common/buttons';

export function MainPage(): JSX.Element {
  let navigate = useNavigate();

  return (<div className="mainContainer">
    <div className="mainContainer-box">
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
    </div>
    <div className="mainContainer-box">
      <ButtonLink title="File" onClick={() =>
        navigate('/fileForm')
    }
      />
      <ButtonLink title="Image" onClick={() =>
        navigate('/fileForm')
    }
      />
    </div>

  </div>);
}
