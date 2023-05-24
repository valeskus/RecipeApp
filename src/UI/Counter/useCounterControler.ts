import {useCallback} from 'react';

export interface UseCounterControlerParams {
  count: number;
  onChange: (value: number) => void;
}

export const useCounterControler = (params: UseCounterControlerParams) => {
  const onMinusPress = useCallback(() => {
    if (params.count <= 1 || !params.count) {
      return;
    }
    params.onChange(params.count - 1);

    return;
  }, [params]);
  const onPlusPress = useCallback(() => {
    if (!params.count) {
      return;
    }
    params.onChange(params.count + 1);
    return;
  }, [params]);
  return {
    onMinusPress,
    onPlusPress,
  };
};
