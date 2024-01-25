import { useNavigate } from 'react-router-dom';

import { Button } from '../common/buttons';

import './ShowArea.style.css';

export function ShowArea(): JSX.Element {
  let navigate = useNavigate();

  return (
    <div className="showArea-container" >

      <div className="showArea-nav">
        <Button title={'Products'} onClick={() => navigate('/showArea/products')} />
        <Button title={'Recipes'} onClick={() => navigate('/showArea/recipes')} />
        <Button title={'Categories'} onClick={() => navigate('/showArea/categories')} />
      </div>

    </div>
  );
}
