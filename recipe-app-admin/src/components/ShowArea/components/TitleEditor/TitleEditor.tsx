import { Icons } from '../../../../Icons';
import { IconButton } from '../../../common/buttons';
import { Input } from '../../../common/inputs';

import { useTitleEditorController } from './useTitleEditorController';
import './TitleEditor.style.css';

interface Props {
  id: string;
  title: string;
  onChange: (id: string, newTitle: string) => void;
}

export function TitleEditor({ id, title, onChange }: Props): JSX.Element {
  const { isEditOn, setEditOn, handleEditMode, handleNewTitle, newTitle } = useTitleEditorController();

  return (<div className="card-title-container">
    <div className="card-title">
      <h2>{title}</h2>

      {!isEditOn && (<IconButton icon={Icons.pencil}
        onClick={() => handleEditMode()}
                     />)}
      {isEditOn && (<IconButton icon={Icons.available}
        onClick={() => {
          setEditOn(false);

          return onChange(id, newTitle);
        }}
                    />)}
    </div>

    {isEditOn && (<div className="card-title-change">
      <Input placeholder={'title'} type={'string'} onChange={handleNewTitle} />
    </div>)}
  </div>);
}
