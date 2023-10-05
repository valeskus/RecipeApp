import { Button } from '../common/buttons';
import { Input } from '../common/inputs';
import { SelectComponent } from '../common/Select';

import './CategoryForm.style.css';
import { useCategoryFormController } from './useCategoryFormController';

export function CategoryForm(): JSX.Element {
  const { handleTitle, handleUATitle, handleImage, typesValue, onSend, handleType,
    title, titleUA, image } = useCategoryFormController();

  return (
    <div className="categoryFormContainer">
      <div className="category-form">
        <Input label="Title :" type="text" placeholder="Title" onChange={handleTitle} value={title}/>
        <Input label="Title UA:" type="text" placeholder="Назва" onChange={handleUATitle} value={titleUA}/>
        <Input label="Image :" type="url" placeholder="Image URL" onChange={handleImage} value={image}/>
        <SelectComponent label="Type:" multiple={false} placeholder="type"options={typesValue} onChange={handleType}/>
      </div>
      <Button title="Submit" onClick={onSend}/>
    </div>
  );
}
