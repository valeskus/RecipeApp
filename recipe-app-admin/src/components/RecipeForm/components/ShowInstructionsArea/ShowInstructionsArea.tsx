import './ShowInstructionsArea.style.css';

import { Icons } from '../../../../Icons';
import { IconButton } from '../../../common/IconButton';

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

            <IconButton icon={Icons.bin}
              value={item.description}
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
