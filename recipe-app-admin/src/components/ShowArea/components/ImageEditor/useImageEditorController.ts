import { useCallback, useState } from 'react';

export const useImageEditorController = () => {
  const [isEditOn, setEditOn] = useState<boolean>();
  const [newImage, setNewImage] = useState<string>('');

  const handleEditMode = useCallback(() => {
    if (isEditOn) {
      return setEditOn(false);
    }

    setEditOn(true);
  }, [isEditOn]);

  const handleNewImage = useCallback((value: string) => {
    setNewImage(value);

  }, []);

  return {
    isEditOn,
    setEditOn,
    handleEditMode,
    handleNewImage,
    newImage,
  };
};
