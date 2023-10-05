import { Icons } from '../../Icons';
import { IconButton } from '../common/buttons';
import { FileInput } from '../common/inputs';

import './FileForm.style.css';
import { useFileFormController } from './useFileFormController';

export function FileForm(): JSX.Element {
  const { handleJSON, onClick } = useFileFormController();

  return (
    <div className="fileForm-container" >
      <FileInput label="Enter JSON file:" onChange={handleJSON} />
      <IconButton icon={Icons.available} onClick={onClick} big={true}/>
    </div>
  );
}
