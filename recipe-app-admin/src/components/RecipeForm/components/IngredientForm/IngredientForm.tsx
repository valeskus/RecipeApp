import { IngredientItem } from '../../../../models';
import { Button } from '../../../common/buttons';
import { Input } from '../../../common/inputs';
import { SelectComponent } from '../../../common/Select';

import './IngredientForm.style.css';
import { useIngredientFormController } from './useIngredientFormController';

interface Props {
  products: Array<{ value: string; label: string }>;
  onAdd: (value: IngredientItem) => void;
}

export function IngredientForm({ products, onAdd }: Props): JSX.Element {
  const { handleIngredient,
    handleAmount, addChanges, amount, ingredient } = useIngredientFormController(onAdd);

  return (
    <div className="ingredientFormContainer">
      <h2>Ingredient Form :</h2>
      <SelectComponent label="Product:" placeholder="product"
        multiple={false} options={products} onChange={handleIngredient}
        value={ingredient}
      />
      <Input label="Amount:" type="number"step=".1"
        placeholder="amount (g/ml)" value={`${amount}`} onChange={handleAmount}
      />
      <Button title="OK" onClick={addChanges} disabled={!amount || !ingredient}/>
    </div>
  );
}
