import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ImagesStateType } from '../../stores/images/types';
import { postImage } from '../../stores/images/imagesSlice';
import { useImagesStore } from '../../stores/images/hooks';
import { useResetImageStatus } from '../../stores/images/hooks/useResetImageStatus';

export const useImageFormController = () => {
  const [imageData, setImageData] = useState<FormData | null>(null);
  const [status, setStatus] = useState<string>('');

  const dispatch = useDispatch();
  const { create }: ImagesStateType = useImagesStore();

  const reset = useResetImageStatus();

  const handleChange = useCallback((e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    let formData = new FormData();
    formData.append('image', e.target.files[0]);
    setImageData(formData);
  }, []);

  useEffect(() => {
    if (create.status === 'Created') {
      setStatus('Created successful!');
      setImageData(null);
    }

    if (create.error) {
      setStatus(create.error.message);
    }
  }, [create.status, create.error]);

  useEffect(() => {

    return () => {
      reset(dispatch);
    };
  }, []);

  const onSend = useCallback(() => {
    setStatus('');
    if (!imageData) {
      return;
    }

    dispatch(postImage(imageData));
  }, [imageData]);

  return {
    status,
    onSend,
    handleChange,
  };
};
