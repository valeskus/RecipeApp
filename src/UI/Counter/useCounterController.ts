import { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';

export interface UseCounterControllerParams {
  count: number;
  onChange: (value: number) => void;
}

export const useCounterController = (params: UseCounterControllerParams) => {
  const [countValue, setCountValue] = useState<number>(params.count);

  const searchInputRef = useRef<TextInput>(null);

  const onSubmitPress = useCallback(() => {
    if (countValue <= 1) {
      setCountValue(1);
      params.onChange(1);

      return;
    }

    params.onChange(countValue);
  }, [params, countValue]);

  const handleChange = useCallback((value: string) => {
    const nextValue = Number(value);
    if (isNaN(nextValue) || nextValue % 1 !== 0) {
      return;
    }

    setCountValue(nextValue);

  }, [params]);

  const onMinusPress = useCallback(() => {
    if (countValue === 1) {
      return;
    }

    const nextValue = countValue - 1;

    setCountValue(nextValue);

    params.onChange(nextValue);
  }, [params, countValue]);

  const onPlusPress = useCallback(() => {
    if (countValue === 99) {
      return;
    }

    const nextValue = countValue + 1;

    params.onChange(nextValue);
    setCountValue(nextValue);
  }, [params, countValue]);

  return {
    onMinusPress,
    onPlusPress,
    onSubmitPress,
    countValue: countValue === 0 ? '' : countValue.toString(),
    handleChange,
    searchInputRef,
  };
};
