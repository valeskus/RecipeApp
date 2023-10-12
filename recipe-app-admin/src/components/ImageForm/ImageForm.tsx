import { Icons } from '../../Icons';
import { FormStatus } from '../common/FormStatus';
import { Loader } from '../common/Loader';
import { IconButton } from '../common/buttons';
import { FileInput } from '../common/inputs';

import './ImageForm.style.css';
import { useImageFormController } from './useImageFormComntroller';

export function ImageForm(): JSX.Element {
  const { isLoading } = useImageFormController();

  return (
    <div className="fileForm-container" >
      {isLoading && <Loader/>}
      <FileInput label="Choose image file(png,jpg):" onChange={() => {}} />
      <IconButton icon={Icons.available} onClick={() => {}} big={true}/>
      <FormStatus status={status}/>
    </div>
  );
}
