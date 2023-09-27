import { Button } from '../../../common/Button';
import { Input } from '../../../common/Input';

import './InstructionForm.style.css';
import { useInstructionsFormController } from './useInstructionsFormController';

interface Props {
}

export function InstructionForm({}: Props): JSX.Element {
  const { handleDescription,
    handleDescriptionUA,
    handleImage,
  } = useInstructionsFormController();

  return (
    <div className="instructionFormContainer">
      <h2>Instruction Form :</h2>
      <Input label="Description:" type="text" placeholder="description" onChange={handleDescription} />
      <Input label="Description UA:" type="text" placeholder="інструкція" onChange={handleDescriptionUA} />
      <Input label="Image:" type="url" placeholder="image url" onChange={handleImage} />
      <Button title="OK" onClick={() => {}} />
    </div>
  );
}
