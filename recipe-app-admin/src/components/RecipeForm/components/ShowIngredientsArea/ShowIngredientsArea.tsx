
import './ShowIngredientsArea.style.css';
import { Button } from '../../../common/Button';

import { ShowIngredientsAreaControllerParams, useShowIngredientsAreaController } from './useShowAreaController';

interface Props extends ShowIngredientsAreaControllerParams {}

export function ShowIngredientsArea({ currentProducts, products, onRemove }: Props): JSX.Element {
  const { arrayWithTitle, removeIngredient } = useShowIngredientsAreaController({
    currentProducts, products, onRemove });

  return (
    <div className="ingredientsShowContainer">
      {
    arrayWithTitle().map((item, index) => {
      return (
        <div key ={index} className="showAreaContainer">
          <h3 className="showAreaTitle">{item.title}:</h3>
          <p className="showAreaAmount">{item.amount}</p>
          <Button title={'delete'}
            value={item.id}
            onClick={removeIngredient}
          />
        </div>
      );
    })
}
    </div>
  );
}
