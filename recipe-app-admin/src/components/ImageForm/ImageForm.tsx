import { Icons } from '../../Icons';
import { Loader } from '../common/Loader';
import { IconButton } from '../common/buttons';
import { FileInput } from '../common/inputs';

import './ImageForm.style.css';
import { ImagesGallery } from './components/ImageGallery';
import { useImageFormController } from './useImageFormComntroller';

export function ImageForm(): JSX.Element {
  const { isLoading } = useImageFormController();

  return (
    <div className="imageForm-container" >
      {isLoading && <Loader/>}
      <div className="imageForm-box">
        <ImagesGallery/>
      </div>
      <div className="imageForm-box">
        <FileInput label="Choose image file(png,jpg):" onChange={() => {}} />
        <IconButton icon={Icons.available} onClick={() => {}} big={true}/>
      </div>

    </div>
  );
}
