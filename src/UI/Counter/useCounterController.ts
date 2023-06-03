import { useCallback } from 'react';

export interface UseCounterControllerParams {
  count: number;
  onChange: (value: number) => void;
}

export const useCounterController = (params: UseCounterControllerParams) => {
  const onMinusPress = useCallback(() => {
    if (params.count === 0) {
      return;
    }

    params.onChange(params.count - 1);
  }, [params]);

  const onPlusPress = useCallback(() => {
    params.onChange(params.count + 1);
  }, [params]);

  return {
    onMinusPress,
    onPlusPress,
  };
};
