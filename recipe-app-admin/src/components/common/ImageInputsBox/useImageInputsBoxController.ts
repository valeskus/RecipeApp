import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAddImageStore } from '../../../stores/addImage/hooks';
import { postImage } from '../../../stores/addImage/AddImageSlice';
import { postInstructionImage } from '../../../stores/addInstructionImage/AddInstructionImageSlice';
import { useAddInstructionImageStore } from '../../../stores/addInstructionImage/hooks';

export interface ImageInputsControllerParams {
  component:  'instruction' | 'image';
  image: string;
  onChange: (image: string) => void;
}

export const useImageInputsController = (params: ImageInputsControllerParams) => {
  const [image, setImage] = useState<string>(params.image);
  const [imageStatus, setImageStatus] = useState<string>('');

  const AddImageStore = useAddImageStore();
  const AddInstructionsImageStore = useAddInstructionImageStore();

  const dispatch = useDispatch();

  const chooseAction = useCallback((data: FormData) => {
    switch (params.component) {
      case 'instruction': return dispatch(postInstructionImage(data));
      case 'image': return dispatch(postImage(data));
    }
  }, [params.component]);

  useEffect(() => {
    if (params.component !== 'image') {
      return;
    }

    if (!AddImageStore.url) {
      return;
    }

    if (AddImageStore.url) {
      setImage(AddImageStore.url);
      params. onChange(AddImageStore.url);
      setImageStatus('Uploaded');
    }

    if (AddImageStore.error) {
      setImageStatus(AddImageStore.error.message);
    }
  }, [params.component, AddImageStore.url, AddImageStore.error]);

  useEffect(() => {
    if (params.component !== 'instruction') {
      return;
    }

    if (!AddInstructionsImageStore.url) {
      return;
    }

    if (AddInstructionsImageStore.url) {
      params. onChange(AddInstructionsImageStore.url);
      setImageStatus('Uploaded');
    }

    if (AddInstructionsImageStore.error) {
      setImageStatus(AddInstructionsImageStore.error.toString());
    }

  }, [params.component, AddInstructionsImageStore]);

  useEffect(() => {

    setImage(params.image);
    if (!params.image) {
      setImageStatus('');
    }
  }, [params.image]);

  const handleImage = useCallback((value: string) => {
    setImage(value);
    params. onChange(value);
  }, [setImage]);

  const handleImageFile = useCallback((e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    let formData = new FormData();
    formData.append('image', e.target.files[0]);
    chooseAction(formData);
    setImageStatus('pending...');

  }, []);

  return {
    image, handleImage, handleImageFile, imageStatus,
  };
};
