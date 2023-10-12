import { ImageInputsBox } from '../../../common/ImageInputsBox';
import { TextArea } from '../../../common/TextArea';
import { Button } from '../../../common/buttons';

import './InstructionForm.style.css';
import { InstructionsFormControllerParams, useInstructionsFormController } from './useInstructionsFormController';

interface Props extends InstructionsFormControllerParams { }

export function InstructionForm(props: Props): JSX.Element {
  const { handleDescription,
    handleDescriptionUA,
    handleImage,
    addChanges,
    description,
    descriptionUA,
  } = useInstructionsFormController(props);

  return (
    <div className="instructionFormContainer">
      <h2>Instruction Form :</h2>
      <TextArea label="Description:"
        onChange={handleDescription} value={description}
      />
      <TextArea label="Description UA:"
        onChange={handleDescriptionUA} value={descriptionUA}
      />
      <ImageInputsBox onChange={handleImage} />

      <Button title="OK" onClick={addChanges} disabled={!description ||
        !descriptionUA}
      />
    </div>
  );
}
