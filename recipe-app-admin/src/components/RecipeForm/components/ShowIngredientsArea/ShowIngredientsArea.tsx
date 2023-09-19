
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
          <h3 className="showAreaTitle">{ item.title}:         </h3>
          <h3 className="showAreaAmount">{item.amount}</h3>
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
