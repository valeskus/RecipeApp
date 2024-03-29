import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CategoryPostModel } from '../../stores/types';
import {  postCategory, useCreateCategoryStore, useResetCategoryState } from '../../stores/createCategory';
import {  postProducts } from '../../stores/createProduct';
import { ProductPostModel } from '../../stores/types';
import { useCategoriesStore } from '../../stores/categories';
import { useCreateProductStore, useResetProductState } from '../../stores/createProduct/hooks';

export const useFileFormController = () => {
  const [fileData, setFileData] = useState({});
  const [status, setStatus] = useState<string>('');

  const dispatch = useDispatch();
  const resetCategoryStatus = useResetCategoryState();
  const resetProductStatus = useResetProductState();
  const categoryState = useCategoriesStore();
  const createCategoryStore = useCreateCategoryStore();
  const createProductState = useCreateProductStore();

  useEffect(() => {

    if (createProductState.status === 201) {
      setStatus('Created successful!');
    }

    if (createProductState.error) {
      setStatus(createProductState.error.response.data.message);
    }
  }, [createProductState]);

  useEffect(() => {

    if (createCategoryStore.status === 'Created') {
      setStatus('Created successful!');
    }

    if (createCategoryStore.error) {
      setStatus(createCategoryStore.error.response.data.message);
    }
  }, [createCategoryStore]);

  useEffect(() => {
    return () => {
      resetCategoryStatus(dispatch);
      resetProductStatus(dispatch);
    };
  }, []);

  const setCategories = useCallback(({ categories }: { categories: [] }) => {
    categories.map((category: CategoryPostModel) => {
      dispatch(postCategory(category));
    });

  }, []);

  const setProducts = useCallback(({ products }: { products: [] }) => {
    products.map((product: ProductPostModel) => {
      dispatch(postProducts(product));
    });

  }, []);

  const setFileValue = useCallback((type: string, fileValue: any) => {
    switch (type) {
      case 'categories': setCategories(fileValue);
        break;
      case 'products': setProducts(fileValue);
        break;
      case 'products categories': setProducts(fileValue);setCategories(fileValue);
        break;
      case 'categories products': setProducts(fileValue);setCategories(fileValue);
        break;
      default:  setStatus('Please select the correct file!');
    }
  }, []);

  const handleJSON = useCallback((e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');

    fileReader.onload = event => {
      if (!event.target?.result) {
        return;
      }

      try {
        const parseValue = JSON.parse(event.target?.result?.toString());
        setFileData(parseValue);
      } catch (error: unknown) {
        setStatus('Please select the correct file! You only need the JSON file!');
      }
    };

  }, []);

  const onClick = useCallback(() => {
    setStatus('');
    setFileValue(Object.keys(fileData).join(' '), fileData);
  }, [fileData]);

  return {
    handleJSON,
    onClick,
    status,
    isLoading: categoryState.isLoading || createProductState.isLoading,
  };

};
