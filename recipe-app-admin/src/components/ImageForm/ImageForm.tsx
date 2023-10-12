import { Icons } from '../../Icons';
import { FormStatus } from '../common/FormStatus';
import { IconButton } from '../common/buttons';
import { FileInput } from '../common/inputs';

import './ImageForm.style.css';
import { ImagesGallery } from './components/ImageGallery';
import { useImageFormController } from './useImageFormController';

export function ImageForm(): JSX.Element {
  const { onSend, handleChange, status } = useImageFormController();

  return (
    <div className="imageForm-container" >
      <div className="imageForm-box">
        <ImagesGallery />
      </div>
      <div className="imageForm-box">
        <FileInput label="Choose image file(png,jpg):" onChange={handleChange} />
        <IconButton icon={Icons.available} onClick={onSend} big={true} />
        <FormStatus status={status}/>
      </div>

    </div>
  );
}
