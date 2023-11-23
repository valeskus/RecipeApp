import { FormStatus } from '../FormStatus';
import { FileInput, Input } from '../inputs';

import { ImageInputsControllerParams, useImageInputsController } from './useImageInputsBoxController';

import './ImageInputsBox.style.css';
interface Props extends ImageInputsControllerParams {
}

export function ImageInputsBox(props: Props): JSX.Element {
  const { image, handleImage, handleImageFile, imageStatus } = useImageInputsController(props);

  return (
    <div className="multiForm-image-box">
      <Input label="Image:" type="url" placeholder="image url" onChange={handleImage}
        value={image}
      />
      <FileInput label="or" onChange={handleImageFile}/>
      <FormStatus status={imageStatus}/>
    </div>
  );
}
