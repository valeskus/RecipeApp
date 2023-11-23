import { Icons } from '../../Icons';
import { FormStatus } from '../common/FormStatus';
import { Loader } from '../common/Loader';
import { IconButton } from '../common/buttons';
import { FileInput } from '../common/inputs';

import './FileForm.style.css';
import { useFileFormController } from './useFileFormController';

export function FileForm(): JSX.Element {
  const { handleJSON, onClick, status, isLoading } = useFileFormController();

  return (
    <div className="fileForm-container" >
      {isLoading && <Loader/>}
      <FileInput label="Enter JSON file:" onChange={handleJSON} />
      <IconButton icon={Icons.available} onClick={onClick} big={true}/>
      <FormStatus status={status}/>
    </div>
  );
}
