import { Button } from '../../../common/Button';
import { TextArea } from '../../../common/TextArea';

import './CategoriesArrayForm.style.css';
import { useCategoriesArrayFormController } from './useCategoriesArrayFormController';

export function CategoriesArrayForm(): JSX.Element {
  const { handleArray, onSend } = useCategoriesArrayFormController();

  return (
    <div className="categoryFormContainer">
      <div className="category-form">
        <TextArea label="Array :" placeholder="Array of Categories" onChange={handleArray}/>
      </div>
      <Button title="Submit" onClick={onSend}/>
    </div>
  );
}
