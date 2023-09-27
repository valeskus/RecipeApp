import { useCallback, useState } from 'react';

export const useInstructionsFormController = () => {
  const [description, setDescription] = useState<string>();
  const [descriptionUA, setDescriptionUA] = useState<string>();
  const [image, setImage] = useState<string>();

  const handleDescription = useCallback((value: string) => {
    setDescription(value);

  }, [setDescription]);

  const handleDescriptionUA = useCallback((value: string) => {
    setDescriptionUA(value);
  }, [setDescriptionUA]);

  const handleImage = useCallback((value: string) => {
    if (!image) {
      return;
    }

    setImage(value);
  }, [setImage]);

  const addChanges = useCallback(() => {
    // onAdd({ description, descriptionUA, image });
    setDescription('');
    setDescriptionUA('');
    setImage('');
  }, [description, descriptionUA, image]);

  return {
    handleDescription,
    handleDescriptionUA,
    handleImage,
    addChanges,
  };
};
