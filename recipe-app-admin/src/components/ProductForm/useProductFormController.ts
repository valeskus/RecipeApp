import React, { useCallback, useState } from 'react';
import * as Redux from 'react-redux';

import './ProductForm.style.css';
import { ProductPostModel } from '../../stores/product/types';
import { postProducts } from '../../stores/product/productsSlice';
import { useGetProducts } from '../../stores/product/hooks';
import { OptionsManager } from '../managers/OptionsManager';
import { OptionModel } from '../common/Select/Select';

export const  useProductFormController = () => {
  const [title, setTitle] = useState<string>('');
  const [titleUA, setTitleUA] = useState<string>('');
  const [kCal, setKCal] = useState<number>(0);
  const [proteins, setProteins] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  const [fats, setFats] = useState<number>(0);
  const [units, setUnits] = useState<'g' | 'ml'>('g');

  const dispatch = Redux.useDispatch();
  const unitsValue = OptionsManager.getOptionsArray(['ml', 'g']);

  const getProducts = useGetProducts();

  const handleTitle = useCallback((value: string) => {
    setTitle(value);
  }, [setTitle]);

  const handleUATitle = useCallback((value: string) => {
    setTitleUA(value);
  }, [setTitleUA]);

  const handleKCal = useCallback((value: string) => {
    setKCal(+value);
  }, [setKCal]);

  const handleProteins = useCallback((value: string) => {
    setProteins(+value);
  }, [setProteins]);

  const handleCarbs = useCallback((value: string) => {
    setCarbs(+value);
  }, [setCarbs]);

  const handleFats = useCallback((value: string) => {
    setFats(+value);
  }, [setFats]);

  const handleUnits = useCallback(({ value }: OptionModel) => {
    if (value !== 'ml' || 'g') {
      return;
    }

    setUnits(value);
  }, [setUnits]);

  React.useEffect(() => {
    getProducts(dispatch);
  }, []);

  const onSend = useCallback(() => {
    const product: ProductPostModel = {
      title: title,
      kCal: kCal,
      proteins: proteins,
      carbs: carbs,
      fats: fats,
      units: units,
      translations: {
        ua: {
          title: titleUA,
        },
      },
    };

    dispatch(postProducts(product));
  }, [title, titleUA, kCal, proteins, carbs, fats, units]);

  return {
    unitsValue,
    onSend,
    handleTitle,
    handleUATitle,
    handleKCal,
    handleProteins,
    handleCarbs,
    handleFats,
    handleUnits,
  };
};
