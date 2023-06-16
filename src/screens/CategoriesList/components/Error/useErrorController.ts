import { useCallback } from 'react';

export const useErrorController = () => {
  const onTryAgain = useCallback(() => {}, []);

  //TODO onTryAgain functionality
  return {
    onTryAgain,
  };
};
