import { useCallback, useEffect, useState } from 'react';
import * as Redux from 'react-redux';

import {  postCategory } from '../../stores/categories/categoriesSlice';
import { CategoriesStateType, CategoryPostModel } from '../../stores/categories/types';
import { useCategoriesStore } from '../../stores/categories';
import { OptionsManager } from '../managers/OptionsManager';
import { OptionModel } from '../common/Select/Select';
import { useResetCategoriesStatus } from '../../stores/categories/hooks/useResetCategoriesStatus';
import { useResetAddImageState } from '../../stores/addImage/hooks';

export const useCategoryFormController = () => {
  const [title, setTitle] = useState<string>('');
  const [titleUA, setTitleUA] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [type, setType] = useState<'meal' | 'diet'>('meal');
  const [status, setStatus] = useState<string>('');

  const { create }: CategoriesStateType = useCategoriesStore();

  const typesValue = OptionsManager.getOptionsArray(['meal', 'diet']);
  const dispatch = Redux.useDispatch();
  const reset = useResetCategoriesStatus();
  const resetImageStatus = useResetAddImageState();

  useEffect(() => {
    if (create.status === 'Created') {
      setStatus('Created successful!');
      setTitle('');
      setTitleUA('');
      setImage('');
    }

    if (create.error) {
      setStatus(create.error.message);
    }
  }, [create.status, create.error]);

  useEffect(() => {
    return  () => {
      reset(dispatch);
      resetImageStatus(dispatch);
    };
  }, []);

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
    isLoading: create.isLoading,
    status,
  };
};
