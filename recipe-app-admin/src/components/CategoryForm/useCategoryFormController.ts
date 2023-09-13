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

  const { create }: CategoriesStateType = useCategoriesStore();
  const typesValue = OptionsManager.getOptionsArray(['meal', 'diet']);

  useEffect(() => {
    if (create.status === 'Created') {
      alert('Created successful!');
    }

    if (create.error) {
      alert(create.error);
    }
  }, [create.status]);

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
    if (!title || !titleUA || !type) {
      return  alert('please check the entered data');
    }

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
  };
};
