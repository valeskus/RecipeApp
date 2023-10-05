import { Button } from '../common/buttons';
import { Input } from '../common/inputs';
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
    handleUnits,
    title,
    titleUA,
    kCal,
    proteins,
    carbs,
    fats } = useProductFormController();

  return (
    <div className="productFormContainer">
      <div className="product-form">
        <Input label="Title :" type="text" placeholder="Title" onChange={handleTitle} value={title}/>
        <Input label="Title UA:" type="text" placeholder="Назва" onChange={handleUATitle} value={titleUA}/>
        <Input label="kCal :" type="number" placeholder="kCal" onChange={handleKCal} value={kCal}/>
        <Input label="Proteins :" type="number" placeholder="proteins" onChange={handleProteins} value={proteins}/>
        <Input label="Carbs :" type="number" placeholder="carbs" onChange={handleCarbs} value={carbs}/>
        <Input label="Fats :" type="number" placeholder="fats" onChange={handleFats} value={fats}/>
        <SelectComponent label="Units:" placeholder="units" multiple={false} options={unitsValue}
          onChange={handleUnits}
        />
      </div>
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
