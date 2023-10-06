import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import {  postCategory } from '../../stores/categories/categoriesSlice';
import { CategoriesStateType, CategoryPostModel } from '../../stores/categories/types';
import { useCategoriesStore } from '../../stores/categories';
import { OptionsManager } from '../managers/OptionsManager';
import { OptionModel } from '../common/Select/Select';

export const useCategoryFormController = () => {
  const [title, setTitle] = useState<string>('');
  const [titleUA, setTitleUA] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [type, setType] = useState<'meal' | 'diet'>('meal');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');

  const { create }: CategoriesStateType = useCategoriesStore();
  const typesValue = OptionsManager.getOptionsArray(['meal', 'diet']);

  useEffect(() => {
    if (create.status === 'Created') {
      setStatus('Created successful!');
      setTitle('');
      setTitleUA('');
      setImage('');
      setLoading(false);
    }

    if (create.error) {
      setStatus(create.error.message);
      setLoading(false);
    }
  }, [create.status, create.error]);

  const handleTitle = useCallback((value: string) => {
    setTitle(value);
  }, [setTitle]);

  const handleUATitle = useCallback((value: string) => {
    setTitleUA(value);
  }, [setTitleUA]);

  const handleImage = useCallback((value: string) => {
    setImage(value);
  }, [setImage]);

  const handleType = useCallback((typeValue: OptionModel) => {
    if (typeValue.value !== ('meal' || 'diet')) {
      return;
    }

    setType(typeValue.value);
  }, [setType]);

  const dispatch = Redux.useDispatch();

  const onSend = useCallback(() => {
    setStatus('');
    const category: CategoryPostModel = {
      title: title,
      translations: {
        ua: {
          title: titleUA,
        },
      },
      image: image,
      type: type,
    };
    dispatch(postCategory(category));
    setLoading(true);

  }, [title, titleUA, image, type]);

  return {
    handleTitle,
    handleUATitle,
    handleImage,
    typesValue,
    onSend,
    handleType,
    title,
    titleUA,
    image,
    isLoading,
    status,
  };
};
