import { useCallback } from 'react';

export interface ShowIngredientsAreaControllerParams {
  currentProducts: Array<{ id: string; amount: number }>;
  products: Array<{ value: string; label: string }>;
  onRemove: (id: string) => void;
}

export const useShowIngredientsAreaController = ({
  currentProducts,
  products,
  onRemove }: ShowIngredientsAreaControllerParams) => {

  const arrayWithTitle = useCallback(() => {
    return currentProducts.map((item) => {
      const currentItem =  products.find((product) => {
        return product.value === item.id;
      });

      return { id: currentItem?.value, title: currentItem?.label, amount: item.amount };
    });
  }, [currentProducts, products]);

  const removeIngredient = useCallback((e: any) => {
    onRemove(e.target.value);
  }, [onRemove]);

  return {
    arrayWithTitle,
    removeIngredient,
  };
};
