import { useCallback, useState } from 'react';

export const useTitleEditorController = () => {
  const [isEditOn, setEditOn] = useState<boolean>();
  const [title, setTitle] = useState<string>();
  const [newTitle, setNewTitle] = useState<string>('');

  const handleEditMode = useCallback(() => {
    if (isEditOn) {
      return setEditOn(false);
    }

    setTitle(title);

    setEditOn(true);
  }, [isEditOn]);

  const handleNewTitle = useCallback((value: string) => {
    setNewTitle(value);

  }, []);

  return {
    isEditOn,
    setEditOn,
    handleEditMode,
    handleNewTitle,
    newTitle,
  };
};
