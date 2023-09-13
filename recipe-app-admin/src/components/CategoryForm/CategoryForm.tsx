import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { SelectComponent } from '../common/Select';

import './CategoryForm.style.css';
import { useCategoryFormController } from './useCategoryFormController';

export function CategoryForm(): JSX.Element {
  const { handleTitle, handleUATitle, handleImage, typesValue, onSend, handleType } = useCategoryFormController();

  return (
    <div className="categoryFormContainer">
      <Input label="Title :" type="text" placeholder="Title" onChange={handleTitle}/>
      <Input label="Title UA:" type="text" placeholder="Назва" onChange={handleUATitle}/>
      <Input label="Image :" type="url" placeholder="Image URL" onChange={handleImage}/>
      <SelectComponent label="Type:" multiple={false} placeholder="type"options={typesValue} onChange={handleType}/>
      <Button title="Submit" onClick={onSend}/>
    </div>
  );
}
