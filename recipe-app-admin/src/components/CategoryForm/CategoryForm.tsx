import { Button } from '../common/buttons';
import { FormStatus } from '../common/FormStatus';
import { FileInput, Input } from '../common/inputs';
import { Loader } from '../common/Loader';
import { SelectComponent } from '../common/Select';

import './CategoryForm.style.css';
import { useCategoryFormController } from './useCategoryFormController';

export function CategoryForm(): JSX.Element {
  const { handleTitle, handleUATitle, handleImage, handleImageFile, typesValue, onSend, handleType,
    title, titleUA, image, isLoading, status, imageStatus } = useCategoryFormController();

  return (
    <div className="categoryFormContainer">
      {isLoading && <Loader/>}
      <div className="category-form">
        <Input label="Title :" type="text" placeholder="Title" onChange={handleTitle} value={title}/>
        <Input label="Title UA:" type="text" placeholder="Назва" onChange={handleUATitle} value={titleUA}/>
        <div className="categoryForm-image-box">
          <Input label="Image :" type="url" placeholder="Image URL" onChange={handleImage} value={image}/>
          <FileInput label="or" onChange={handleImageFile}/>
          <FormStatus status={imageStatus}/>
        </div>
        <SelectComponent label="Type:" multiple={false} placeholder="type"options={typesValue} onChange={handleType}/>
      </div>
      <FormStatus status={status}/>
      <Button title="Submit" onClick={onSend}/>
    </div>
  );
}
