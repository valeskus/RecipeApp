
import './ShowIngredientsArea.style.css';
import { IconButton } from '../../../common/IconButton';
import { Icons } from '../../../../Icons';

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
          <IconButton icon={Icons.bin}
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
