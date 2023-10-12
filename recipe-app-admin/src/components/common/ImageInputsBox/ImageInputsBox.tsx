import { FormStatus } from '../FormStatus';
import { FileInput, Input } from '../inputs';

import { useImageInputsController } from './useImageInputsBoxController';

import './ImageInputsBox.style.css';
interface Props {
  onChange: (image: string) => void;
}

export function ImageInputsBox({ onChange }: Props): JSX.Element {
  const { image, handleImage, handleImageFile, imageStatus } = useImageInputsController(onChange);

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
