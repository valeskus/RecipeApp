import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ImagesStateType } from '../../stores/images/types';
import { postImage } from '../../stores/images/imagesSlice';
import { useImagesStore } from '../../stores/images/hooks';
import { useResetImageStatus } from '../../stores/images/hooks/useResetImageStatus';

export const useImageFormController = () => {
  const [imageData, setImageData] = useState <Array<FormData>>([]);
  const [status, setStatus] = useState<string>('');

  const dispatch = useDispatch();
  const { create }: ImagesStateType = useImagesStore();

  const reset = useResetImageStatus();

  const onSend = useCallback(() => {
    setStatus('');
    if (!imageData) {
      return;
    }

    imageData.map((data: FormData) => {
      dispatch(postImage(data));

      return;
    });
  }, [imageData]);

  const handleChange = useCallback((e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    const formDataArray: Array<FormData> = [];
    Object.values(e.target.files).map((file: any) => {
      let formData = new FormData();
      formData.append('image', file);
      formDataArray.push(formData);

      return;
    });
    setImageData(formDataArray);

  }, [imageData]);

  useEffect(() => {
    if (create.status === 'Created') {
      setStatus('Created successful!');
      setImageData([]);
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

  return {
    status,
    onSend,
    handleChange,
  };
};
