import { TextArea } from '../../../common/TextArea';
import { Button } from '../../../common/buttons';
import { Input } from '../../../common/inputs';

import './InstructionForm.style.css';
import { InstructionsFormControllerParams, useInstructionsFormController } from './useInstructionsFormController';

interface Props extends InstructionsFormControllerParams {}

export function InstructionForm(props: Props): JSX.Element {
  const { handleDescription,
    handleDescriptionUA,
    handleImage,
    addChanges,
    description,
    descriptionUA,
    image,
  } = useInstructionsFormController(props);

  return (
    <div className="instructionFormContainer">
      <h2>Instruction Form :</h2>
      <TextArea label="Description:"
        onChange={handleDescription}  value={description}
      />
      <TextArea label="Description UA:"
        onChange={handleDescriptionUA} value={descriptionUA}
      />
      <Input label="Image:" type="url" placeholder="image url"
        onChange={handleImage}  value={image}
      />
      <Button title="OK" onClick={addChanges} disabled={   !description ||
    !descriptionUA}
      />
    </div>
  );
}
