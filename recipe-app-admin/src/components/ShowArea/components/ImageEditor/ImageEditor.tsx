import { Icons } from '../../../../Icons';
import { IconButton } from '../../../common/buttons';
import { Input } from '../../../common/inputs';

import { useImageEditorController } from './useImageEditorController';
import './ImageEditor.style.css';

interface Props {
  id: string;
  onChange: (id: string, newTitle: string) => void;
  message?: string;
}

export function ImageEditor({ id, onChange, message }: Props): JSX.Element {
  const { isEditOn, setEditOn, handleEditMode, handleNewImage, newImage } = useImageEditorController();

  return (<div>
    <div className="image-edit">
      {!isEditOn && (<IconButton icon={Icons.pencil}
        onClick={() => handleEditMode()}
                     />)}
      {isEditOn && (<IconButton icon={Icons.available}
        onClick={() => {
          setEditOn(false);

          return onChange(id, newImage);
        }}
                    />)}
    </div>

    {isEditOn && (<div className="card-image-change">
      <Input placeholder={'image link'} type={'string'} onChange={handleNewImage} />
    </div>)}
    {message && <p>{message}</p>}
  </div>);
}
