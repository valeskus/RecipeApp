import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useErrorController = () => {
  const navigation = useNavigation();

  const onTryAgain = useCallback(() => {}, []);

  //TODO
  return {
    onTryAgain,
  };
};
