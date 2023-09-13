import { Input } from '../../../common/Input';
import { SelectComponent } from '../../../common/Select';
import './IngredientForm.style.css';

interface Props {
  products: Array<{ value: string; label: string }>;
}

export function IngredientForm({ products }: Props): JSX.Element {

  return (
    <div className="ingredientFormContainer">
      <h2>Ingredient Form :</h2>
      <SelectComponent label="Product:" placeholder="product"
        multiple={false} options={products} onChange={() => { }}
      />
      <Input label="Amount:" type="number" placeholder="amount" onChange={() => { }} />
    </div>
  );
}
