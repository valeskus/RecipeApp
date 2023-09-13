import React from 'react';
import * as Redux from 'react-redux';

import './ProductForm.style.css';
import { ProductPostModel } from '../../stores/product/types';
import { postProducts } from '../../stores/product/productsSlice';
import { useGetProducts } from '../../stores/product/hooks';
import { OptionsManager } from '../managers/OptionsManager';

export const  useProductFormController = () => {
  const dispatch = Redux.useDispatch();
  const unitsValue = OptionsManager.getOptionsArray(['ml', 'g']);

  const getProducts = useGetProducts();
  React.useEffect(() => {
    getProducts(dispatch);
  }, []);

  //TODO product state
  const product: ProductPostModel = {
    title: 'Arugula',
    kCal: 75,
    proteins: 16.7,
    carbs: 0,
    fats: 0.8,
    units: 'ml',
    translations: {
      ua: {
        title: 'Рукола',
      },
    },
  };

  const onSend = () => {
    if (!product) {
      return alert('Please,check data');
    }

    dispatch(postProducts(product));
  };

  return {
    unitsValue,
    onSend,
  };
};
