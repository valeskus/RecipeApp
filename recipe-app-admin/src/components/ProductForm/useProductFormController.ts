import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import './ProductForm.style.css';
import { ProductPostModel } from '../../stores/types';
import { postProducts } from '../../stores/createProduct/createProductSlice';
import { useGetProducts } from '../../stores/product/hooks';
import { OptionsManager } from '../managers/OptionsManager';
import { OptionModel } from '../common/Select/Select';
import { useCreateProductStore, useResetProductState } from '../../stores/createProduct/hooks';

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
  const reset = useResetProductState();
  const unitsValue = OptionsManager.getOptionsArray(['ml', 'g']);

  const getProducts = useGetProducts();
  const CreateProductStore = useCreateProductStore();

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
    if (CreateProductStore.status === 201) {
      setStatus('Created successful!');
      setTitle('');
      setTitleUA('');
      setKCal('');
      setProteins('');
      setCarbs('');
      setFats('');
    }

    if (CreateProductStore.error) {
      setStatus(CreateProductStore.error.response.data.message);
    }
  }, [CreateProductStore.status, CreateProductStore.error]);

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
    isLoading: CreateProductStore.isLoading,
    status,
  };
};
