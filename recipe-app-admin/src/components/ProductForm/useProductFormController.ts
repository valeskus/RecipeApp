import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import './ProductForm.style.css';
import { ProductPostModel, ProductsStateType } from '../../stores/product/types';
import { postProducts } from '../../stores/product/productsSlice';
import { useGetProducts, useProductsStore, useResetProductStatus } from '../../stores/product/hooks';
import { OptionsManager } from '../managers/OptionsManager';
import { OptionModel } from '../common/Select/Select';

export const  useProductFormController = () => {
  const [title, setTitle] = useState<string>('');
  const [titleUA, setTitleUA] = useState<string>('');
  const [kCal, setKCal] = useState<string>('');
  const [proteins, setProteins] = useState<string>('');
  const [carbs, setCarbs] = useState<string>('');
  const [fats, setFats] = useState<string>('');
  const [units, setUnits] = useState<'g' | 'ml'>('g');
  const [status, setStatus] = useState<string>('');

  const dispatch = Redux.useDispatch();
  const reset = useResetProductStatus();
  const unitsValue = OptionsManager.getOptionsArray(['ml', 'g']);

  const getProducts = useGetProducts();
  const { create }: ProductsStateType = useProductsStore();

  const handleTitle = useCallback((value: string) => {
    setTitle(value);
  }, [setTitle]);

  const handleUATitle = useCallback((value: string) => {
    setTitleUA(value);
  }, [setTitleUA]);

  const handleKCal = useCallback((value: string) => {
    setKCal(value);
  }, [setKCal]);

  const handleProteins = useCallback((value: string) => {
    setProteins(value);
  }, [setProteins]);

  const handleCarbs = useCallback((value: string) => {
    setCarbs(value);
  }, [setCarbs]);

  const handleFats = useCallback((value: string) => {
    setFats(value);
  }, [setFats]);

  const handleUnits = useCallback(({ value }: OptionModel) => {
    if (value !== 'ml' || 'g') {
      return;
    }

    setUnits(value);
  }, [setUnits]);

  useEffect(() => {
    getProducts(dispatch);

    return () => {
      reset(dispatch);
    };
  }, []);

  useEffect(() => {
    if (create.status === 'Created') {
      setStatus('Created successful!');
      setTitle('');
      setTitleUA('');
      setKCal('');
      setProteins('');
      setCarbs('');
      setFats('');
    }

    if (create.error) {
      setStatus(create.error.message);
    }
  }, [create.status, create.error]);

  const onSend = useCallback(() => {
    setStatus('');

    const product: ProductPostModel = {
      title: title,
      kCal: +kCal,
      proteins: +proteins,
      carbs: +carbs,
      fats: +fats,
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
    title,
    titleUA,
    kCal,
    proteins,
    carbs,
    fats,
    isLoading: create.isLoading,
    status,
  };
};
