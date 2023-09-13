import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { SelectComponent } from '../common/Select';

import './ProductForm.style.css';
import { useProductFormController } from './useProductFormController';

export function ProductForm(): JSX.Element {
  const { unitsValue, onSend } = useProductFormController();

  return (
    <div className="productFormContainer">
      <Input label="Title :" type="text" placeholder="Title" onChange={() => { }} />
      <Input label="Title UA:" type="text" placeholder="Назва" onChange={() => { }} />
      <Input label="kCal :" type="number" placeholder="kCal" onChange={() => { }} />
      <Input label="Proteins :" type="number" placeholder="proteins" onChange={() => { }} />
      <Input label="Carbs :" type="number" placeholder="carbs" onChange={() => { }} />
      <Input label="Fats :" type="number" placeholder="fats" onChange={() => { }} />
      <SelectComponent label="Units:" placeholder="units" multiple={false} options={unitsValue} onChange={() => { }}/>
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
