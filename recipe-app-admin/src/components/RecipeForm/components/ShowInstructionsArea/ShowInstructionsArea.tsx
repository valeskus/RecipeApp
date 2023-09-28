import './ShowInstructionsArea.style.css';
import { Button } from '../../../common/Button';

import { ShowInstructionsAreaControllerParams,
  useShowInstructionsAreaController } from './useShowInstructionsAreaController';

interface Props extends ShowInstructionsAreaControllerParams {}

export function ShowInstructionsArea(props: Props): JSX.Element {

  const { removeInstruction } = useShowInstructionsAreaController(props);

  return (
    <div className="showInstructionsContainer">
      {
    props.instructions.map((item, index) => {
      return (
        <div key ={index} className="showInstructionItemContainer">
          <div>
            <h3>{index + 1}.</h3>
          </div>
          <div className="showInstructionItem">
            <p className="showInstructionContent">{item.description}</p>
            <p className="showInstructionContent">{item.translations.ua.description}</p>
            {item.image && <p className="showInstructionContent">{item.image}</p>}

            <Button title={'delete'} value={item.description}
              onClick={removeInstruction}
            />
          </div>

        </div>
      );
    })
}
    </div>
  );
}
