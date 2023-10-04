import { useCallback } from 'react';

export const useCategoriesArrayFormController = () => {
  const handleArray = useCallback(() => {}, []);
  const onSend = useCallback(() => {}, []);

  return { handleArray, onSend };

};
