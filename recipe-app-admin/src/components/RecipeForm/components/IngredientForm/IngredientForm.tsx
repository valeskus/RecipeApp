import { Input } from '../../../common/Input';
import { Select } from '../../../common/Select';
import './IngredientForm.style.css';

interface Props {
  products: Array<{ id: string; title: string }>;
}

export function IngredientForm({ products }: Props): JSX.Element {

  return (
    <div className="ingredientFormContainer">
      <h2>Ingredient Form :</h2>
      <Select label="Product:" placeholder="---" optionArrayWithId={products} onChange={() => { }} />
      <Input label="Amount:" type="number" placeholder="amount" onChange={() => { }} />
    </div>
  );
}
