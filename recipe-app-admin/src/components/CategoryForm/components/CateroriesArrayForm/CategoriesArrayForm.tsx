import { Button } from '../../../common/Button';
import { Input } from '../../../common/Input';

import './CategoriesArrayForm.style.css';
import { useCategoriesArrayFormController } from './useCategoriesArrayFormController';

export function CategoriesArrayForm(): JSX.Element {
  const { handleArray, onSend } = useCategoriesArrayFormController();

  return (
    <div className="categoryFormContainer">
      <div className="category-form">
        <Input label="Array :" type="text" placeholder="Array of Categories" onChange={handleArray}/>
      </div>
      <Button title="Submit" onClick={onSend}/>
    </div>
  );
}
