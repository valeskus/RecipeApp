import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useImagesStore } from '../../../stores/images/hooks';
import { postImage } from '../../../stores/images/imagesSlice';

export const useImageInputsController = (onChange: (image: string) => void) => {
  const [image, setImage] = useState<string>('');
  const [imageStatus, setImageStatus] = useState<string>('');

  const ImagesStore = useImagesStore();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ImagesStore.create.url) {
      return;
    }

    if (ImagesStore.create.url) {
      setImage(ImagesStore.create.url);
      onChange(ImagesStore.create.url);
      setImageStatus('Uploaded');
    }

    if (ImagesStore.create.error) {
      setImageStatus(ImagesStore.create.error.message);
    }
  }, [ImagesStore.create.url, ImagesStore.create.error]);

  const handleImage = useCallback((value: string) => {
    setImage(value);
    onChange(value);
  }, [setImage]);

  const handleImageFile = useCallback((e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    let formData = new FormData();
    formData.append('image', e.target.files[0]);
    dispatch(postImage(formData));
    setImageStatus('pending...');

  }, []);

  return {
    image, handleImage, handleImageFile, imageStatus,
  };
};
