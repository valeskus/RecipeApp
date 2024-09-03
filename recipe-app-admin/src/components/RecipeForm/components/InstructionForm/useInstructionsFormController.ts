import { useCallback, useEffect, useState } from 'react';

import { InstructionItem } from '../../../../models';

export interface InstructionsFormControllerParams {
  onChange: (item: InstructionItem) => void;
}

export const useInstructionsFormController = (params: InstructionsFormControllerParams) => {
  const [description, setDescription] = useState<string>('');
  const [descriptionUA, setDescriptionUA] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const handleDescription = useCallback((value: string) => {
    setDescription(value);
  }, [setDescription]);

  const handleDescriptionUA = useCallback((value: string) => {
    setDescriptionUA(value);
  }, [setDescriptionUA]);

  const handleImage = useCallback((value: string) => {
    setImage(value);
  }, [setImage]);

  const addChanges = useCallback(() => {
    if (!description || !descriptionUA) {
      return alert('You need to add description and descriptionUA');
    }

    if (!image) {
      params.onChange({
        description,
        translations: {
          ua: {
            description: descriptionUA,
          },
        },
      });
      setDescription('');
      setDescriptionUA('');
      setImage('');

      return;
    }

    params.onChange({
      description,
      translations: {
        ua: {
          description: descriptionUA,
        },
      },
      image,
    });
    setDescription('');
    setDescriptionUA('');
    setImage('');
  }, [description, descriptionUA, image]);

  useEffect(() => {
    if (description === '' || descriptionUA === '') {
      return  setDisabledButton(true);
    }

    setDisabledButton(false);
  }, [description, descriptionUA]);

  return {
    handleDescription,
    handleDescriptionUA,
    handleImage,
    addChanges,
    description,
    descriptionUA,
    image,
    disabledButton,
  };
};
