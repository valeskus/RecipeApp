import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CategoryPostModel } from '../../stores/categories/types';
import {  postCategory } from '../../stores/categories/categoriesSlice';
import {  postProducts } from '../../stores/product/productsSlice';
import { ProductPostModel } from '../../stores/product/types';
import { useCategoriesStore } from '../../stores/categories';
import { useProductsStore } from '../../stores/product/hooks';

export const useFileFormController = () => {
  const [fileData, setFileData] = useState({});
  const dispatch = useDispatch();
  const categoryState = useCategoriesStore();
  const productState = useProductsStore();

  useEffect(() => {
    const create = productState.create || categoryState.create;

    if (create.status === 'Created') {
      alert('Created successful!');
    }

    if (create.error) {
      alert(create.error.message);
    }
  }, [productState.create, categoryState.create]);

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
      default: console.log('error');
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

      const parseValue = JSON.parse(event.target?.result?.toString());
      setFileData(parseValue);
    };

  }, []);

  const onClick = useCallback(() => {
    setFileValue(Object.keys(fileData).join(''), fileData);

  }, [fileData]);

  return {
    handleJSON,
    onClick,
  };

};
