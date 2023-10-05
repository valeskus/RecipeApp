import { FileInput } from '../common/FileInput';

import './FileForm.style.css';
import { useFileFormController } from './useFileFormController';

export function FileForm(): JSX.Element {
  const { handleJSON } = useFileFormController();

  return (
    <div >
      <FileInput label="Array :" onChange={handleJSON}/>
    </div>
  );
}
