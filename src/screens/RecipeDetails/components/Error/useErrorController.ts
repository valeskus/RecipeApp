import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useErrorController = () => {
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTryAgain = useCallback(() => {}, []);

  //TODO
  return {
    onGoBack,
    onTryAgain,
  };
};
