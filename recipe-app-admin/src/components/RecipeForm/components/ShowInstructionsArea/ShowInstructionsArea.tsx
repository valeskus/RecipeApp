import './ShowInstructionsArea.style.css';
import { Button } from '../../../common/Button';
import { InstructionItem } from '../../../../models';

export function ShowInstructionsArea(): JSX.Element {
  const arr: Array<InstructionItem> = [

    { description: 'description',

      translations: {
        ua: {
          description: 'Опис',
        },
      },
      image: 'image',
    },
    { description: 'description',

      translations: {
        ua: {
          description: 'Опис',
        },
      },
      image: 'image',
    },
    { description: 'description',

      translations: {
        ua: {
          description: 'Опис',
        },
      },
      image: 'image',
    },
  ];

  return (
    <div className="showInstructionsContainer">
      {
    arr.map((item, index) => {
      return (
        <div key ={index} className="showInstructionItemContainer">
          <div>
            <h3>{index + 1}.</h3>
          </div>
          <div className="showInstructionItem">
            <p className="showInstructionContent">{item.description}</p>
            <p className="showInstructionContent">{item.translations.ua.description}</p>
            {item.image && <p className="showInstructionContent">{item.image}</p>}

            <Button title={'delete'}
              onClick={() => {}}
            />
          </div>

        </div>
      );
    })
}
    </div>
  );
}
