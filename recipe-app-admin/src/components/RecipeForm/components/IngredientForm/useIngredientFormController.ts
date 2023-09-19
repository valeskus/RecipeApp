import { useCallback, useState } from 'react';

import { IngredientItem } from '../../../../models';
import { OptionModel } from '../../../common/Select/Select';

export const useIngredientFormController = (onAdd: (value: IngredientItem) => void) => {
  const [ingredient, setIngredient] = useState<OptionModel>();
  const [amount, setAmount] = useState<string>('');

  const handleIngredient = useCallback((ingredientItem: OptionModel) => {
    setIngredient(ingredientItem);

  }, [setIngredient]);

  const handleAmount = useCallback((value: string) => {
    setAmount(value);
  }, [setAmount]);

  const addChanges = useCallback(() => {
    if (!amount || !ingredient) {
      return;
    }

    onAdd({ id: ingredient.value, amount: +amount });
    setIngredient({ label: '', value: '' });
    setAmount('');
  }, [ingredient, amount]);

  return {
    handleIngredient,
    handleAmount,
    addChanges,
    amount,
    ingredient,
  };
};
