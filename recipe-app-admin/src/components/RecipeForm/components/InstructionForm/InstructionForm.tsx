import { Button } from '../../../common/Button';
import { Input } from '../../../common/Input';
import './InstructionForm.style.css';

interface Props {
}

export function InstructionForm({}: Props): JSX.Element {

  return (
    <div className="instructionFormContainer">
      <h2>Instruction Form :</h2>
      <Input label="Description:" type="text" placeholder="description" onChange={() => { }} />
      <Input label="Description UA:" type="text" placeholder="інструкція" onChange={() => { }} />
      <Input label="Image:" type="url" placeholder="image url" onChange={() => { }} />
      <Button title="OK" onClick={() => {}} />
    </div>
  );
}
