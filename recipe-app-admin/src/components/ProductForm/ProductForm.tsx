import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { SelectComponent } from '../common/Select';

import './ProductForm.style.css';
import { useProductFormController } from './useProductFormController';

export function ProductForm(): JSX.Element {
  const {  unitsValue,
    onSend,
    handleTitle,
    handleUATitle,
    handleKCal,
    handleProteins,
    handleCarbs,
    handleFats,
    handleUnits } = useProductFormController();

  return (
    <div className="productFormContainer">
      <Input label="Title :" type="text" placeholder="Title" onChange={handleTitle} />
      <Input label="Title UA:" type="text" placeholder="Назва" onChange={handleUATitle} />
      <Input label="kCal :" type="number" placeholder="kCal" onChange={handleKCal} />
      <Input label="Proteins :" type="number" placeholder="proteins" onChange={handleProteins} />
      <Input label="Carbs :" type="number" placeholder="carbs" onChange={handleCarbs} />
      <Input label="Fats :" type="number" placeholder="fats" onChange={handleFats} />
      <SelectComponent label="Units:" placeholder="units" multiple={false} options={unitsValue} onChange={handleUnits}/>
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
