import { useNavigate } from 'react-router-dom';

import { Button } from '../common/Button';

export function MainPage(): JSX.Element {
  let navigate = useNavigate();

  return (<div>
    <Button title="Category" onClick={() =>
      navigate('/formManager', { state: { formByItem: 'categoryForm', formByArray: 'recipeForm' } })
    }
    />
    <Button title="Product" onClick={() =>
      navigate('/formManager', { state: { formByItem: 'productForm', formByArray: 'recipeForm' } })
    }
    />
    <Button title="Recipe" onClick={() =>
      navigate('/formManager', { state: { formByItem: 'recipeForm', formByArray: 'recipeForm' } })
    }
    />
  </div>);
}
